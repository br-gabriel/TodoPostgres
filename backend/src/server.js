const cors = require("cors");
const express = require("express");
const todosRoutes = require("./routes/todos.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(todosRoutes);
app.use(userRoutes);

app.listen(3232, () => console.log("Servidor rodando na porta 3232"));