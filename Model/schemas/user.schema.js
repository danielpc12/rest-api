/** packages */
const mongoose = require ("mongoose");
const validator = require("mongoose-unique-validator");

//Creacion del esquema
const userSchema = new mongoose.Schema ({
    name:{
        type: "String",
        required: true
    },

    lastname:{
        type: "String",
        required: true
    },

    username:{
        type: "String",
        required: true,
        unique: true
    },

    password:{
        type: "String",
        required: true
    },

    role:{
        type: "Number",
        required: true
    },
}); 

//Exportar esquema
userSchema.plugin(validator);
module.exports = userSchema;