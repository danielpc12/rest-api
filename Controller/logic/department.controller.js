//Recibimos solicitudes del request y las dirigimos a los DIR
/** DTO */
const departmentDto = require("../../Model/dto/department.dto");
const config = require("config");
const { Schema } = require("mongoose");


exports.createDepartment = (req, res, next) => {
    let department = {
        name: req.body.name,
        faculty_id: req.body.faculty_id
    };

    departmentDto.create(department, (err, data) => {
       if(err){
           return res.status(400).json(
               {
                   error: err
               }
           );
       } 


        res.status(201).json(
            {
                info: data
            }
        );
    });
};

// exports.updateDepartment = (req, res, next) => {
//     let department = {
//         name: req.body.name,
//         faculty: require("./faculty.controller")
//     };

//     departmentDto.update({_id: req.body.id}, department, (err, data) => {
//        if(err){
//            return res.status(400).json(
//                {
//                    error: err
//                }
//            );
//         }
//         res.status(201).json(
//             {
//                 info: data
//             }
//         );
//     });
// };

exports.getAll = (req, res, next) => {

    departmentDto.getAll({}, (err, data) => {
       if(err){
           return res.status(400).json(
               {
                   error: err
               }
           );
       }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.getByCode = (req, res, next) => {

    departmentDto.getByCode({_id: req.params.id}, (err, data) => {
       if(err){
           return res.status(400).json(
               {
                   error: err
               }
           );
       }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deleteDepartment = () => {
    departmentDto.delete({_id: req.body.id}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
         res.status(204).json();
     });
};
