//Para no llenar el app.js de rutas, las dividimos
const controller = require("../Controller/logic/department.controller");

module.exports = (app) => {

    app.get("/department", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/department/bycode/:code", (req, res, next) => {
        console.log("Getting department by code");
        controller.getByCode(req, res, next);
    });
    
    app.post("/department", (req, res, next) => {
        controller.createDepartment(req, res, next);
    });

    // app.put("/department", (req, res, next) => {
    //     controller.updateDepartment(req, res, next);
    // });
    
    app.delete("/department", (req, res, next) => {
        controller.deleteDepartment(req, res, next);
    });
};