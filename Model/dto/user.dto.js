/** Packages */
// Desarrollo de las funciones que hacen uso de la información
const mongoose = require("mongoose");

/** Usamos esquemas */
const schema = require ("../schemas/user.schema");

schema.statics = {
    crate: function(data, cb){
        let doc = new this(data);
        doc.save (cb);
    },
    
    getAll: function(query, cb){
        this.find (query, cb);
    },

    getByCode: function(query, cb){
        this.find (query, cb);
    },

    login: function(query, cb){
        this.find (query, cb);
    },

    update: function(query, data, cb){
        this.findOneAndUpdate(query,{$set: data}, {new: true}, cb);
    },

    delete: function (query, cb){
        this.findOneAndDelete(query);
    }
};

const dto = mongoose.model("coll_user",schema);
module.exports = dto;