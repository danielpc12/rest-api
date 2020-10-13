//Para no llenar el app.js de rutas, las dividimos
const controller = require("../Controller/logic/user.controller");

module.exports = (app) => {

    app.get("/user", (req, res, next) => {
        controller.getAll(req, res, next);
    });
    
    app.post("/user", (req, res, next) => {
        controller.login(req, res, next);
    });
};