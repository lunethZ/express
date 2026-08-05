const logger = (req, res, next) => {
    const inicio = Date.now();

    console.log("---------------");
    console.log("Método:", req.method);
    console.log("URL:", req.url);
    console.log("Fecha:", new Date().toLocaleString());

    res.on("finish", () => {
        const tiempo = Date.now() - inicio;
        console.log("Estado:", res.statusCode);
        console.log("Tiempo:", tiempo + " ms");
    });

    next();
};

module.exports = logger;