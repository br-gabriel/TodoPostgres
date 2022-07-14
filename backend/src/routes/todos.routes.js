const express = require("express");

const allTodos = [{ name: "Teste", status: false }];
const todosRoutes = express.Router();

todosRoutes.post("/todos", (req, res) => {
    const { name } = req.body;
    allTodos.push({ name, status: false });
    return res.status(201).json(allTodos);
})

todosRoutes.get("/todos", (req, res) => {
    return res.status(200).json(allTodos);
})

todosRoutes.patch("/todos", (req, res) => {

})

todosRoutes.delete("/todos", (req, res) => {
    
})

module.exports = todosRoutes