const { response, request } = require('express');
const { Registration, RegistrationCourse, Course, User, Areas } = require('../models');

let info = '';
let cursos = '';


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


    // console.log(`There are ${await Project.count()} projects`);

    // const amount = await Project.count({
    // where: {
    //     id: {
    //         [Op.gt]: 25
    //     }   
    // }
    // } );
    // console.log(`There are ${amount} projects with an id greater than 25`);
    await loadInfo();
    await loadCourse(req.body.id_curso);
    console.log(cursos);

    let ward = true;
    let msg = ''
    info.forEach(matr => {
        if(matr.matricula.id == req.body.id_matr && matr.curso.id ==  req.body.id_curso ){
            // console.log('Ya existe un curso registrado en la matricula');
           msg += `Ya existe un curso con id ${ req.body.id_curso} en la matricula ${req.body.id_matr}`
            ward = false;
        }
        
    });

    let areas = 0;
    
    info.forEach(matr => {
        if(matr.matricula.id == req.body.id_matr && cursos.areas_estudio.id ==  matr.curso.area_estudio_id ){
            areas += 1;
        }
        
    });

    if(areas >= 4){
        ward = false;
        msg += ` El estudiante ya supero la cantidad máxima (4) de cursos de una misma area ${cursos.areas_estudio.area_estudio}`;
       
       
    }


    if(ward){
        await RegistrationCourse.create(
            {
                
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
    }
    else{
        try {
            res.status(400).send(msg);
        } catch (error) {
            console.log(error);
        }
       
    }
    
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


async function loadInfo() {//obtener todos los cursos
     await RegistrationCourse.findAll({attributes:[
        'id'
    ], include: [{ model: Registration, attributes: ['id', 'fecha_matricula', 'precio_matricula'],
        include: [{model: User, 
            attributes: ['id', 'nombre', 'apellido', 'telefono', 'dni', 'correo', 'direccion']}] }, 
    { model: Course }]})
        .then(registration => {
            const data = JSON.stringify(registration);
            const results = JSON.parse(data);
            // console.log(results);
            info = results;
            
        }).catch(error => {
            console.log(error);
        });
};

async function loadCourse(id) {
        //obtener todos los cursos


        await Course.findOne({attributes:[
            'id', 'nombre_curso', 'descripcion', 'cupo_disponible', 
            'fecha_limite_curso', 'estado_curso', 'img_curso'
        ], where: { id: id }, include: [{ model: Areas}]})
            .then(course => {
                const data = JSON.stringify(course);
                const results = JSON.parse(data);
                cursos = results;
                
            }).catch(error => {
                console.log(error);
            });
    
};

module.exports = {
    getAllRegistrationCourse,
    getOneRegistrationCourse,
    createNewRegistrationCourse,
    updateOneRegistrationCourse,
    deleteOneRegistrationCourse,
    loadInfo,
    loadCourse
};
