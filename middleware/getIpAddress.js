module.exports = (req, res, next) => {
    //Con esto nos muestra en consola la IP de la persona que está realizando las acciones
    console.log(`Ip client: ${req.connection.remoteAddress}`);
    next();
}