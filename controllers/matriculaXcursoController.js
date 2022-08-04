const { response, request } = require('express');
const { Registration, RegistrationCourse, Course, User } = require('../models');


const getAllRegistrationCourse= async(req = request, res = response) => {//obtener todos los cursos
    await RegistrationCourse.findAll({attributes:[
        'id'
    ], include: [{ model: Registration, attributes: ['id', 'fecha_matricula', 'precio_matricula'],
        include: [{model: User, 
            attributes: ['id', 'nombre', 'apellido', 'telefono', 'dni', 'correo', 'direccion']}] }, 
    { model: Course }]})
        .then(registration => {
            const data = JSON.stringify(registration);
            const results = JSON.parse(data);
            if (results.length > 0) {
                res.json({
                    results
                });
            }else{
                res.status(404).send('No hay cursos en matriculas registrados');
            }
        }).catch(error => {
            console.log(error);
        });
};

const getOneRegistrationCourse = async(req = request, res = response) => {
    await RegistrationCourse.findOne({attributes:[
        'id', 'id_matr', 'id_curso'
    ], where: { id: req.params.id } })
        .then(registration => {
            const data = JSON.stringify(registration);
            const results = JSON.parse(data);
            if (results != null) {
                res.json({
                    results
                });
            }else{
                res.status(404).send(`Matricula con cursos con id: ${req.params.id} no encontrada`);
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const createNewRegistrationCourse = async(req = request, res = response) => {
    //res.send(`Create course ${req.params.id}`);
    await RegistrationCourse.create({
        id_matr: req.body.id_matr,
        id_curso: req.body.id_curso,
    }, { fields: ['id_matr', 'id_curso'] })
        .then(registration => {
            if (registration) {
                res.send({
                    registration,
                    msg: 'Matricula por cursos creada correctamente'
                });
                
            } else {
                res.status(400).send('Error in insert new record');
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const updateOneRegistrationCourse = async(req = request, res = response) => {
    await RegistrationCourse.update({ 
        id_matr: req.body.id_matr,
        id_curso: req.body.id_curso,
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(registration => {
            if (registration != 0) {
                res.status(200).send(`Matricula por cursos con id: ${req.params.id} fue actualizada correctamente`);
            }else{
                res.status(404).send(`Matricula por cursos con id: ${req.params.id} no encontrada`);
            }
            
        }).catch(error => {
            console.log(error);
        });
};

const deleteOneRegistrationCourse = async(req = request, res = response) => {

        await RegistrationCourse.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(registration => {
                if (registration != 0) {
                    res.status(200).send(`Matricula por cursos con id: ${req.params.id} fue borrada correctamente`);
                }else{
                    res.status(404).send(`Matricula por cursos con id: ${req.params.id} no encontrada`);
                }
                
            }).catch(error => {
                console.log(error);
            })
    
};

module.exports = {
    getAllRegistrationCourse,
    getOneRegistrationCourse,
    createNewRegistrationCourse,
    updateOneRegistrationCourse,
    deleteOneRegistrationCourse
};