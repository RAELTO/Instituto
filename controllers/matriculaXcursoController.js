const { response, request } = require('express');
const RegistrationCourse = require('../models/matriculaXcurso');

const getAllRegistrationCourse= async(req = request, res = response) => {//obtener todos los cursos
    await RegistrationCourse.findAll({attributes:[
        'id', 'id_matr', 'id_curso'
    ]})
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
    //res.send(`Get course ${req.params.id}`);
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


    // console.log(`There are ${await Project.count()} projects`);

    // const amount = await Project.count({
    // where: {
    //     id: {
    //         [Op.gt]: 25
    //     }   
    // }
    // } );
    // console.log(`There are ${amount} projects with an id greater than 25`);


    await RegistrationCourse.create(
        {
        id_matr: req.body.id_matr,
        id_curso: req.body.id_curso,
       
    }, { fields: ['id_matr', 'id_curso'] })
        .then(registration => {

            courseValidator(id_matr, id_curso);
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

// //Validar que un curso este registrado en una misma matricula 
// const courseValidator = async(id_matr = '', id_curso = '') => {
//     console.log(id_matr, id_curso);
//     const courseExists = await RegistrationCourse.findOne({ where: { id_matr: id_matr, id_curso: id_curso } });
//     if ( courseExists ){
//         return false
//     }
//     return 

// }

const updateOneRegistrationCourse = async(req = request, res = response) => {
    //res.send(`Update course ${req.params.id}`);
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