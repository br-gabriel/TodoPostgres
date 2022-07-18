const cors = require("cors")
const express = require("express");
const todosRoutes = require("./routes/todos.routes");

const app = express();

app.use(express.json());
app.use(todosRoutes);
app.use(cors());

app.get("/test", (req, res) => {
    return res.json("Funcionando")
})

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));

