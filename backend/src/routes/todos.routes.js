const express = require("express");
const { PrismaClient } = require("@prisma/client");

const todosRoutes = express.Router();

const prisma = new PrismaClient();

todosRoutes.post("/todos", async (req, res) => {
    const { name } = req.body;
    const todo = await prisma.todo.create({
        data: {
            name,
        },
    });

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.status(201).json(todo);
});

todosRoutes.get("/todos", async (req, res) => {
    const allTodos = await prisma.todo.findMany();

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.status(200).json(allTodos);
});

todosRoutes.put("/todos", async (req, res) => {
    const { name, id, status } = req.body;
    
    if(!id) {
        return res.status(400).json("Id is mandatory");
    }

    const todoAlreadyExists = await prisma.todo.findUnique({
         where: {id}
    });

    if(!todoAlreadyExists) {
        return res.status(404).json("Todo not exists");
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

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.status(200).json(todo);
});

todosRoutes.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const intID = parseInt(id);
    
    if(!intID) {
        return res.status(400).json("Id is mandatory")
    }

    const todoAlreadyExists = await prisma.todo.findUnique({
         where: { id: intID }, 
    });

    if(!todoAlreadyExists) {
        return res.status(404).json("Todo not exists");
    };

    await prisma.todo.delete({ where: { id: intID } });

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.status(200).send();
})

module.exports = todosRoutes