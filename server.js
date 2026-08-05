const express = require("express");

const app = express();

const auditoriaMiddleware = require("./middlewares/auditoria");
const validarUsuario = require("./middlewares/validarUsuario");

app.use(express.json());
app.use(auditoriaMiddleware);

app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

app.get("/api/productos", (req, res) => {
    res.json({
        mensaje: "Listado de productos"
    });
});

app.post("/api/usuarios", validarUsuario, (req, res) => {
    res.status(201).json({
        mensaje: "Usuario creado correctamente",
        datos: req.body
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});