const { response, request } = require('express');
const Course = require('../models/cursos');

const getAllCourses = async(req = request, res = response) => {//obtener todos los cursos
    await Course.findAll({attributes:[
        'id', 'nombre_curso', 'descripcion', 'cupo_disponible',
        'area_estudio_id', 'fecha_limite_curso'
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
        'area_estudio_id', 'fecha_limite_curso'
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

const createNewCourse = (req, res) => {
    res.send(`Create course ${req.params.id}`);
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