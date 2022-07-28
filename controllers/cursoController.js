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
            res.json({
                results
            });
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
                res.send(`Curso con id: ${req.params.id} no encontrado`);
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
                res.send(course);
                console.log("Curso creado correctamente");
            } else {
                res.status(400).send('Error in insert new record');
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const updateOneCourse = (req, res) => {
    res.send(`Update course ${req.params.id}`);
};

const deleteOneCourse = (req, res) => {
    res.send(`Delete course ${req.params.id}`);
};

module.exports = {
    getAllCourses,
    getOneCourse,
    createNewCourse,
    updateOneCourse,
    deleteOneCourse
};