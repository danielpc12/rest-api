/** packages */
const mongoose = require ("mongoose");

//Creacion del esquema
const studentGroupSchema = new mongoose.Schema ({
    student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_student",
        required: true,
    },

    group_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_group",
        required: true,
    },
}); 

//Exportar esquema
module.exports = studentGroupSchema;