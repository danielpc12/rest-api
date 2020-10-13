/** packages */
const mongoose = require ("mongoose");
const validator = require("mongoose-unique-validator");

//Creacion del esquema
const studentSchema = new mongoose.Schema ({
    code:{
        type: "String",
        required: true,
        unique: true
    },

    name:{
        type: "String",
        required: true,
    },

    lastname:{
        type: "String",
        required: true,
    },

    email:{
        type: "String",
        required: true,
        unique: true
    },

    phone:{
        type: "Number",
        required: true,
    },

    career:{
        type: "String",
        required: true,
    },
}); 

//Exportar esquema
studentSchema.plugin(validator);
module.exports = studentSchema;