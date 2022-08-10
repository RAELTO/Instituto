const { response, request } = require('express');
const { Course, Areas } = require('../models');

const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL );

const getAllCourses = async(req = request, res = response) => {//obtener todos los cursos
    await Course.findAll({attributes:[
        'id', 'nombre_curso', 'descripcion', 'cupo_disponible', 
        'fecha_limite_curso', 'estado_curso', 'img'
    ], include: [{ model: Areas}]})
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
    await Course.findOne({attributes:[
        'id', 'nombre_curso', 'descripcion', 'cupo_disponible', 
        'fecha_limite_curso', 'estado_curso', 'img'
    ], where: { id: req.params.id }, include: [{ model: Areas}]})
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
    }, { fields: ['nombre_curso', 'descripcion', 'cupo_disponible',
    'area_estudio_id', 'fecha_limite_curso', 'estado_curso'] })
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

        if (req.files) {
            const courses = await Course.findAll();
            let model;

            model = await Course.findByPk(courses[courses.length - 1].dataValues.id);

            //Limpiar imagenes previas
            if (model.img) {
                const nombreArr = model.img.split('/');
                const nombre = nombreArr[nombreArr.length - 1];
                const [ public_id ] = nombre.split('.'); //id publico de cloudinary
                cloudinary.uploader.destroy( public_id ); //metodo de cloudinary que borra segun el public id
            }

            const { tempFilePath } = req.files.img

            const { secure_url } = await cloudinary.uploader.upload( tempFilePath );

            model.img = secure_url;

            await model.save();
        }
    
};

const updateOneCourse = async(req = request, res = response) => {
    //res.send(`Update course ${req.params.id}`);
    await Course.update({ 
        nombre_curso: req.body.nombre_curso,
        descripcion: req.body.descripcion,
        cupo_disponible: req.body.cupo_disponible,
        area_estudio_id: req.body.area_estudio_id,
        fecha_limite_curso: req.body.fecha_limite_curso,
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

        if (req.files) {
            let model;
            model = await Course.findByPk(req.params.id);

            //Limpiar imagenes previas
            if (model.img) {
                const nombreArr = model.img.split('/');
                const nombre = nombreArr[nombreArr.length - 1];
                const [ public_id ] = nombre.split('.'); //id publico de cloudinary
                cloudinary.uploader.destroy( public_id ); //metodo de cloudinary que borra segun el public id
            }

            const { tempFilePath } = req.files.img

            const { secure_url } = await cloudinary.uploader.upload( tempFilePath );

            model.img = secure_url;

            await model.save();
        }
};

const deleteOneCourse = async(req = request, res = response) => {

    //Limpiar imagenes
    let model = await Course.findByPk(req.params.id);
    if (model.img) {
        const nombreArr = model.img.split('/');
        const nombre = nombreArr[nombreArr.length - 1];
        const [ public_id ] = nombre.split('.'); //id publico de cloudinary
        cloudinary.uploader.destroy( public_id ); //metodo de cloudinary que borra segun el public id
    }

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