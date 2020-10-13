//Recibimos solicitudes del request y las dirigimos a los DIR
/** DTO */
const facultyDto = require("../../Model/dto/faculty.dto");
const config = require("config");


exports.createFaculty = (req, res, next) => {
    let faculty = {
        name: req.body.name,
        code: req.body.code
    };

    facultyDto.create(faculty, (err, data) => {
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

exports.updateFaculty = (req, res, next) => {
    let faculty = {
        name: req.body.name,
        code: req.body.code
    };

    facultyDto.update({_id: req.body.id}, faculty, (err, data) => {
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

exports.getAll = (req, res, next) => {

    facultyDto.getAll({}, (err, data) => {
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

    facultyDto.getByCode({_id: req.params.id}, (err, data) => {
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

exports.deleteFaculty = () => {
    facultyDto.delete({_id: req.body.id}, (err, data) => {
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
