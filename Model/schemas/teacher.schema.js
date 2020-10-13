/** packages */
const mongoose = require ("mongoose");
const validator = require("mongoose-unique-validator");

//Creacion del esquema
const teacherSchema = new mongoose.Schema ({
    document:{
        type: "Number",
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

    office:{
        type: "String",
        required: true,
    },

    department_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_department",
        required: true,
    },
}); 

//Exportar esquema
teacherSchema.plugin(validator);
module.exports = teacherSchema;