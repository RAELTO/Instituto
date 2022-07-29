const { response, request } = require('express');
const Course = require('../models/cursos');

const getAllCourses = async(req = request, res = response) => {//obtener todos los cursos
    await Course.findAll({attributes:[
        'id', 'nombre_curso', 'descripcion', 'cupo_disponible',
        'area_estudio_id', 'fecha_limite_curso', 'estado_curso', 'img_curso'
    ]})
        .then(course => {
            const data = JSON.stringify(course);
            const results = JSON.parse(data);
            if (results.length > 0) {
                res.json({
                    results
                });
            }else{
                res.status(404).send('No hay cursos registrados');
            }
        }).catch(error => {
            console.log(error);
        });
};

const getOneCourse = async(req = request, res = response) => {
    //res.send(`Get course ${req.params.id}`);
    await Course.findOne({attributes:[
        'id', 'nombre_curso', 'descripcion', 'cupo_disponible',
        'area_estudio_id', 'fecha_limite_curso', 'estado_curso', 'img_curso'
    ], where: { id: req.params.id } })
        .then(course => {
            const data = JSON.stringify(course);
            const results = JSON.parse(data);
            if (results != null) {
                res.json({
                    results
                });
            }else{
                res.status(404).send(`Curso con id: ${req.params.id} no encontrado`);
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const createNewCourse = async(req = request, res = response) => {
    //res.send(`Create course ${req.params.id}`);
    await Course.create({
        nombre_curso: req.body.nombre_curso,
        descripcion: req.body.descripcion,
        cupo_disponible: req.body.cupo_disponible,
        area_estudio_id: req.body.area_estudio_id,
        fecha_limite_curso: req.body.fecha_limite_curso,
        estado_curso: 1,
        img_curso: req.body.img_curso
    }, { fields: ['nombre_curso', 'descripcion', 'cupo_disponible',
    'area_estudio_id', 'fecha_limite_curso', 'estado_curso', 'img_curso'] })
        .then(course => {
            if (course) {
                res.send({
                    course,
                    msg: 'Curso creado correctamente'
                });
                
            } else {
                res.status(400).send('Error in insert new record');
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const updateOneCourse = async(req = request, res = response) => {
    //res.send(`Update course ${req.params.id}`);
    await Course.update({ 
        nombre_curso: req.body.nombre_curso,
        descripcion: req.body.descripcion,
        cupo_disponible: req.body.cupo_disponible,
        area_estudio_id: req.body.area_estudio_id,
        fecha_limite_curso: req.body.fecha_limite_curso,
        img_curso: req.body.img_curso
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(course => {
            if (course != 0) {
                res.status(200).send(`Curso con id: ${req.params.id} fue actualizado correctamente`);
            }else{
                res.status(404).send(`Curso con id: ${req.params.id} no encontrado`);
            }
            
        }).catch(error => {
            console.log(error);
        });
};

const deleteOneCourse = async(req = request, res = response) => {
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
                id: req.params.id
            }
        })
            .then(course => {
                if (course != 0) {
                    res.status(200).send(`Curso con id: ${req.params.id} fue borrado correctamente`);
                }else{
                    res.status(404).send(`Curso con id: ${req.params.id} no encontrado`);
                }
                
            }).catch(error => {
                console.log(error);
            })
    
};

module.exports = {
    getAllCourses,
    getOneCourse,
    createNewCourse,
    updateOneCourse,
    deleteOneCourse
};