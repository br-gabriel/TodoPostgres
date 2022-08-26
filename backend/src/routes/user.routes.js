const express = require("express");
const userRoutes = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


userRoutes.post("/user/signup", async (req, res) => {
    const { email, password } = req.body;

    const userExists = await prisma.user.findUnique({
        where: { email }
    });

    if (userExists) {
        return res.status(422).json({ error: "Email já está em uso" });
    };

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = await prisma.user.create({
        data: {
            email: email,
            password: hashedPassword,
        },
    });

    return res.status(201).json(user);
});

userRoutes.post("/user/signin", async (req, res) => {
    const { email, password } = req.body;

    const userExists = await prisma.user.findUnique({
        where: { email }
    });

    if (!userExists) {
        return res.status(422).json({ error: "Email ou senha inválida" });
    };

    const checkPassword = await bcrypt.compare(password, userExists.password);

    if (!checkPassword) {
        return res.status(422).json({ error: "Email ou senha inválida" });
    };

    try {
        const secret = process.env.SECRET;
        const token = await jwt.sign(
            {
                id: userExists.id,
            },
            secret,
            {expiresIn: '8h'}
        );

        return res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ message: "Autenticação realizada com sucesso" });
    } catch {
        return res.status(500).json({ error: "Erro interno do servidor, tente mais tarde" });
    }
});

module.exports = userRoutes;