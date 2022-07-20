const cors = require("cors")
const express = require("express");
const todosRoutes = require("./routes/todos.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(todosRoutes);

app.get("/test", (req, res) => {
    return res.json("Funcionando")
});

app.listen(3232, () => console.log("Servidor rodando na porta 3232"));