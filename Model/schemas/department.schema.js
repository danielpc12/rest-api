/** packages */
const mongoose = require ("mongoose");

//Creacion del esquema
const departmentSchema = new mongoose.Schema ({
    name:{
        type: "string",
        required: true
    },

    faculty_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_faculty",
        required: true,
    },

    // faculty: {
    //     type: "string",
    //     required: true
    // }
    // teacher_id:{

    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "coll_teacher",
    //     required: true,
    // }
}); 

//Exportar esquema
module.exports = departmentSchema;