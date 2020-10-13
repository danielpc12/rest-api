/** Packages */
//Usamos el body parser para poder acceder al body
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** Configruacion de app */
//ensayamos lo que hemos creado
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    {extended: true}
);

app.use(jsonParser);
app.use(urlEncodedParser);

//Traemos la funcion de la IP y la ejecutamos en la consola
const ipFn= require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Metodos */

app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api");

});
app.listen(port, () => {
    console.log("server is running...")
});

//Cargando ruta de User
const userRoutes = require("./routes/user.route");
userRoutes(app);

//Token middleware
tkFn = require("./middleware/verifyToken")
app.use(tkFn)

//Cargando ruta de Student
const studentRoutes = require("./routes/student.route");
studentRoutes(app);

//Cargando ruta de Teacher
const teacherRoutes = require("./routes/teacher.route");
teacherRoutes(app);

//Cargando ruta de Course
const courseRoutes = require("./routes/course.route");
courseRoutes(app);

//Cargando ruta de Period
const periodRoutes = require("./routes/period.route");
periodRoutes(app);

//Cargando ruta de Department
const departmentRoutes = require("./routes/department.route");
departmentRoutes(app);

//Cargando ruta de Department
const facultyRoutes = require("./routes/faculty.route");
facultyRoutes(app);



