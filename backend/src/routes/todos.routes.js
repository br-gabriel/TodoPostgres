const express = require("express");
const { PrismaClient } = require("@prisma/client");

const allTodos = [{ name: "Teste", status: false }];
const todosRoutes = express.Router();

const prisma = new PrismaClient();

todosRoutes.post("/todos", async (req, res) => {
    const { name } = req.body;
    const todo = await prisma.todo.create({
        data: {
            name,
        },
    });
    //allTodos.push({ name, status: false });
    return res.status(201).json(todo);
})

todosRoutes.get("/todos", (req, res) => {
    return res.status(200).json(allTodos);
})

todosRoutes.patch("/todos", (req, res) => {

})

todosRoutes.delete("/todos", (req, res) => {

})

module.exports = todosRoutes