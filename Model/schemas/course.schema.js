/** packages */
const mongoose = require ("mongoose");

//Creacion del esquema
const courseSchema = new mongoose.Schema ({
    code:{
        type: "String",
        required: true,
    },

    name:{
        type: "String",
        required: true,
    },
}); 

//Exportar esquema
module.exports = courseSchema;