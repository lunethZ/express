function validarUsuario(req, res, next) {

    const { nombre, correo, edad } = req.body || {};

    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
        return res.status(400).json({
            error: "El nombre es obligatorio."
        });
    }

    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correo || !expresionCorreo.test(correo)) {
        return res.status(400).json({
            error: "Correo inválido."
        });
    }

    if (!Number.isInteger(edad) || edad < 18) {
        return res.status(400).json({
            error: "La edad debe ser un número entero mayor o igual a 18."
        });
    }

    next();
}

module.exports = validarUsuario;