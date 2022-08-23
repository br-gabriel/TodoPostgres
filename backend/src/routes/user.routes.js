const express = require("express");
const { PrismaClient } = require("@prisma/client");

const userRoutes = express.Router();
const prisma = new PrismaClient();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const checkToken = require("../middlewares/checkToken");

userRoutes.post("/user/signup", async (req, res) => {
    const { email, password } = req.body;

    const userExists = await prisma.user.findUnique({
        where: { email }
    });

    if (userExists) {
        return res.status(422).json({error: "Email já está em uso"});
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
        return res.status(422).json({error: "Email não encontrado"});
    };

    const checkPassword = await bcrypt.compare(password, userExists.password);

    if (!checkPassword) {
        return res.status(422).json({error: "Senha inválida"});
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

        const userId = userExists.id;

        res.status(200).json({ msg: "Autenticação realizada com sucesso", token});
    } catch {
        res.status(500).json({erro: "Erro interno do servidor, tente mais tarde"});
    }
});


userRoutes.get("/user/id", checkToken, async (req, res) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({message: "Token não encontrado"});
    }

    const [, token] = authHeader.split(" ");

    try {
        const decodedToken = await jwt.decode(token);
        return res.status(200).json(decodedToken);
    } catch(err) {
        return res.status(401).json({message: "Token inválido"});
    }
});

module.exports = userRoutes;