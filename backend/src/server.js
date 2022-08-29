const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const todosRoutes = require("./routes/todos.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(cors({
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(todosRoutes);
app.use(userRoutes);

app.listen(3232, () => console.log("Servidor rodando na porta 3232"));