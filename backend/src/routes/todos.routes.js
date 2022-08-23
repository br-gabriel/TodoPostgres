const express = require("express");
const { PrismaClient } = require("@prisma/client");
const checkToken = require("../middlewares/checkToken");

const todosRoutes = express.Router();
const prisma = new PrismaClient();

todosRoutes.post("/user/:id/todos", checkToken, async (req, res) => {
    const { id: userId } = req.params;
    const { name } = req.body;

    if(!userId) {
        return res.status(400).json("Id de usuário é obrigatório");
    };
    
    const todo = await prisma.todo.create({
        data: {
            name,
            userId,
        },
    });

    return res.status(201).json(todo);
});

todosRoutes.get("/user/:id/todos", checkToken, async (req, res) => {
    const { id: userId } = req.params;

    if(!userId) {
        return res.status(400).json("Id de usuário é obrigatório");
    };

    const allTodos = await prisma.todo.findMany({ where: { userId } });

    return res.status(200).json(allTodos);
});

todosRoutes.put("/user/todos", checkToken, async (req, res) => {
    const { name, id, status } = req.body;
    
    if(!id) {
        return res.status(400).json("Id é obrigatório");
    };

    const todoAlreadyExists = await prisma.todo.findUnique({
         where: {id}
    });

    if(!todoAlreadyExists) {
        return res.status(404).json("Essa tarefa não existe");
    };

    const todo = await prisma.todo.update({
        where: {
            id,
        },
        data: {
            name,
            status,
        },
    });

    return res.status(200).json(todo);
});

todosRoutes.delete("/user/todos/:todoid", checkToken, async (req, res) => {
    const { todoid } = req.params;
    const intID = parseInt(todoid);
    
    if(!intID) {
        return res.status(400).json("Id é obrigatório");
    };

    const todoAlreadyExists = await prisma.todo.findUnique({
         where: { id: intID }, 
    });

    if(!todoAlreadyExists) {
        return res.status(404).json("Essa tarefa não existe");
    };

    await prisma.todo.delete({ where: { id: intID } });

    return res.status(200).send();
})

module.exports = todosRoutes;