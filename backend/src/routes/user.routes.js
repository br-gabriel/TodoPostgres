const express = require("express");
const { PrismaClient } = require("@prisma/client");

const userRoutes = express.Router();
const prisma = new PrismaClient();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRoutes.post("/users", async (req, res) => {
    const { email, password } = req.body;

    //check if user already exists
    const userExists = await prisma.user.findUnique({
        where: {email}
    });

    if (userExists) {
        return res.status(422).json({error: "Email já está em uso!"});
    };

    //create password
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    //create user
    const user = await prisma.user.create({
        data: {
            email: email,
            password: hashedPassword,
        },
    });

    return res.status(201).json(user);
});

userRoutes.get("/users", async (req, res) => {

});

module.exports = userRoutes;