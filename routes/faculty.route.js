//Para no llenar el app.js de rutas, las dividimos
const controller = require("../Controller/logic/faculty.controller");

module.exports = (app) => {

    app.get("/faculty", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/faculty/bycode/:code", (req, res, next) => {
        console.log("Getting faculty by code");
        controller.getByCode(req, res, next);
    });
    
    app.post("/faculty", (req, res, next) => {
        controller.createFaculty(req, res, next);
    });

    // app.put("/faculty", (req, res, next) => {
    //     controller.updateFaculty(req, res, next);
    // });
    
    app.delete("/faculty", (req, res, next) => {
        controller.deleteFaculty(req, res, next);
    });
};