const { response, request } = require('express');
const Registration = require('../models/matricula');
const Course = require('../models/matriculaXcurso');

const getAllRegistration= async(req = request, res = response) => {//obtener todos los cursos
    await Registration.findAll({attributes:[
        'id', 'alumno_id', 'estado_id', 'fecha_matricula',
        'precio_matricula'
    ]})
        .then(registration => {
            const data = JSON.stringify(registration);
            const results = JSON.parse(data);
            if (results.length > 0) {
                res.json({
                    results
                });
            }else{
                res.status(404).send('No hay matriculas registradas');
            }
        }).catch(error => {
            console.log(error);
        });
};

const getOneRegistration = async(req = request, res = response) => {
    //res.send(`Get course ${req.params.id}`);
    await Registration.findOne({attributes:[
        'id', 'alumno_id', 'estado_id', 'fecha_matricula',
        'precio_matricula'
    ], where: { id: req.params.id } })
        .then(registration => {
            const data = JSON.stringify(registration);
            const results = JSON.parse(data);
            if (results != null) {
                res.json({
                    results
                });
            }else{
                res.status(404).send(`Matricula con id: ${req.params.id} no encontrado`);
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const createNewRegistration = async(req = request, res = response) => {
    //res.send(`Create course ${req.params.id}`);
    await Registration.create({
        alumno_id: req.body.alumno_id,
        estado_id: req.body.estado_id,
        fecha_matricula: req.body.fecha_matricula,
        precio_matricula: req.body.precio_matricula,
       
    }, { fields: ['alumno_id', 'estado_id', 'fecha_matricula',
    'precio_matricula'] })
        .then(registration => {
            if (registration) {
                res.send({
                    registration,
                    msg: 'Matricula creada correctamente'
                });
                
            } else {
                res.status(400).send('Error in insert new record');
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const updateOneRegistration = async(req = request, res = response) => {
    //res.send(`Update course ${req.params.id}`);
    await Registration.update({ 
        alumno_id: req.body.alumno_id,
        estado_id: req.body.estado_id,
        fecha_matricula: req.body.fecha_matricula,
        precio_matricula: req.body.precio_matricula,
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(registration => {
            if (registration != 0) {
                res.status(200).send(`Matricula con id: ${req.params.id} fue actualizada correctamente`);
            }else{
                res.status(404).send(`Matricula con id: ${req.params.id} no encontrada`);
            }
            
        }).catch(error => {
            console.log(error);
        });
};

const deleteOneRegistration = async(req = request, res = response) => {
    //res.send(`Delete course ${req.params.id}`);
    /*await Course.update({ 
        estado_curso: 0,
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(course => {
            console.log(course);
            if (course != 0) {
                res.status(200).send(`Curso con id: ${req.params.id} fue borrado correctamente`);
            }else{
                res.status(404).send(`Curso con id: ${req.params.id} no encontrado`);
            }
            
        }).catch(error => {
            console.log(error);
        });*/
        
        await Course.destroy({
            where: {
                id_matr: req.params.id
            }
        })
            
        await Registration.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(registration => {
                if (registration != 0) {
                    res.status(200).send(`Matricula con id: ${req.params.id} fue borrada correctamente y Cursos de la matricula con id: ${req.params.id} fueron borrados correctamente`);
                }else{
                    res.status(404).send(`Matricula con id: ${req.params.id} no encontrada y Cursos de la matricula con id: ${req.params.id} no encontrados`);
                }
                
            }).catch(error => {
                console.log(error);
            })
    
};

module.exports = {
    getAllRegistration,
    getOneRegistration,
    createNewRegistration,
    updateOneRegistration,
    deleteOneRegistration,
    
};