const { response, request } = require('express');
const { Registration, RegistrationCourse, Course, User, Areas, Transfers } = require('../models');

let info = '';
let cursos = '';


const getAllTransfer= async(req = request, res = response) => {//obtener todos los cursos
    await Transfers.findAll({attributes:[
        'id', 'motivo_traslado', 'estado'
    ], include: [{ model: Registration, attributes: ['id', 'fecha_matricula', 'precio_matricula'],
        include: [{model: User, 
            attributes: ['id', 'nombre', 'apellido', 'telefono', 'dni', 'correo', 'direccion']}] }, 
    { model: Course }]})
        .then(transfer => {
            const data = JSON.stringify(transfer);
            const results = JSON.parse(data);
            
            if (results.length > 0) {
                res.json({
                    results
                });
            }else{
                res.status(404).send('No hay traslados registrados');
            }
        }).catch(error => {
            console.log(error);
        });
};

const getOneTransfer = async(req = request, res = response) => {
    await Transfers.findOne({attributes:[
        'id', 'motivo_traslado', 'id_matricula_curso', 'estado', 'nuevo_curso_id', 'curso_anterior_id'
    ], where: { id: req.params.id } })
        .then(transfer => {
            const data = JSON.stringify(transfer);
            const results = JSON.parse(data);
            if (results != null) {
                res.json({
                    results
                });
            }else{
                res.status(404).send(`Traslado con id: ${req.params.id} no encontrado`);
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const createNewTransfer = async(req = request, res = response) => {
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
   
    let registro = await validateRegister(req.body.id_matr,  req.body.id_curso);

    if(registro.ward){
        await Transfers.create(
            {
                
            motivo_traslado: req.body.motivo_traslado,
            id_matricula_curso: req.body.id_matricula_curso,
            estado: req.body.estado,
            nuevo_curso_id: req.body.nuevo_curso_id,
            curso_anterior_id: req.body.curso_anterior_id
        }, { fields: [ 'motivo_traslado', 'id_matricula_curso', 'estado', 'nuevo_curso_id', 'curso_anterior_id'] })
            .then(transfer => {
               
                if (transfer) {
                    res.send({
                        transfer,
                        msg: 'Traslado guardado correctamente '
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
            res.status(400).send(registro.msg);
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

const updateOneTransfer = async(req = request, res = response) => {

    let registro = await validateRegister(req.body.id_matr,  req.body.id_curso);


    if(registro.ward){

        await Transfers.update({ 
            motivo_traslado: req.body.motivo_traslado,
            id_matricula_curso: req.body.id_matricula_curso,
            estado: req.body.estado,
            nuevo_curso_id: req.body.nuevo_curso_id,
            curso_anterior_id: req.body.curso_anterior_id
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(transfer => {
                if (transfer != 0) {
                    res.status(200).send(`Matricula por cursos con id: ${req.params.id} fue actualizada correctamente`);
                }else{
                    res.status(404).send(`Matricula por cursos con id: ${req.params.id} no encontrada`);
                }
                
            }).catch(error => {
                console.log(error);
            });
    }
    else{
        try {
            res.status(400).send(registro.msg);
        } catch (error) {
            console.log(error);
        }
       
    }
    
};

const deleteOneTransfer = async(req = request, res = response) => {

        await Transfers.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(transfer => {
                if (transfer != 0) {
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

async function validateRegister(id_matr, id_curso){

    await loadInfo();
    await loadCourse(id_curso);
    // console.log(cursos);
    // console.log(info);

    // console.log(id_matr, id_curso);
    let registro = {
        ward: true,
        msg: ''
    }
    // let ward = true;
    // let msg = ''
    info.forEach(matr => {
        if(matr.matricula.id == id_matr && matr.curso.id ==  id_curso ){
            // console.log('Ya existe un curso registrado en la matricula');
           registro.msg += `Ya existe un curso con id ${ id_curso} en la matricula ${id_matr}`
            registro.ward = false;
        }
        
    });

    let areas = 0;
    
    info.forEach(matr => {
        if(matr.matricula.id == id_matr && cursos.areas_estudio.id ==  matr.curso.area_estudio_id ){
            areas += 1;
        }
        
    });

    if(areas >= 4){
        registro.ward = false;
        registro.msg += `\nEl estudiante ya supero la cantidad máxima (4) de cursos de una misma area ${cursos.areas_estudio.area_estudio}`;
       
       
    }

    return registro;
};

module.exports = {
    getAllTransfer,
    getOneTransfer,
    createNewTransfer,
    updateOneTransfer,
    deleteOneTransfer,
    loadInfo,
    loadCourse
};
