/** packages */
const mongoose = require ("mongoose");

//Creacion del esquema
const facultySchema = new mongoose.Schema ({
    name:{
        type: "string",
        required: true
    },

    code: {

        type: "string",
        required: true 
    },

}); 

//Exportar esquema
module.exports = facultySchema;