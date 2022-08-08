const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const { Role, TDocument, User } = require('../models');
const { use } = require('../routes/usuarios');

const getAllUsers = async(req = request, res = response) => {//obtener todos los cursos
    await User.findAll({attributes:[
        'id', 'nombre', 'apellido', 'fecha_nac',
        'telefono', 'documento', 'dni',
        'correo', 'direccion', 'id_estado', 'img'
    ], include: [{ model: Role}, { model: TDocument }]})
        .then(user => {
            const data = JSON.stringify(user);
            console.log(data);
            const results = JSON.parse(data);
            if (results.length > 0) {
                res.json({
                    results
                });
            }else{
                res.status(404).send('No hay usuarios registrados');
            }
        }).catch(error => {
            console.log(error);
        });
};

const getOneUser = async(req = request, res = response) => {
    //res.send(`Get course ${req.params.id}`);
    await User.findOne({attributes:[
        'id', 'nombre', 'apellido', 'fecha_nac',
        'telefono', 'documento', 'dni',
        'correo', 'direccion', 'id_estado', 'img'
    ], where: { id: req.params.id }, include: [{ model: Role}, { model: TDocument }]})
        .then(user => {
            const data = JSON.stringify(user);
            const results = JSON.parse(data);
            if (results != null) {
                res.json({
                    results
                });
            }else{
                res.status(404).send(`Usuario con id: ${req.params.id} no encontrado`);
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const createNewUser = async(req = request, res = response) => {

    // pass encrypt
    const salt = bcryptjs.genSaltSync();
    const pass = bcryptjs.hashSync( req.body.contrasena, salt );//encriptacion de una sola via

    await User.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_nac: req.body.fecha_nac,
        telefono: req.body.telefono,
        documento: req.body.documento,
        tipo_doc_id: req.body.tipo_doc_id,
        dni: req.body.dni,
        correo: req.body.correo,
        direccion: req.body.direccion,
        rol_id: req.body.rol_id,
        id_estado: req.body.id_estado,
        contrasena: pass,
    }, { fields: ['nombre', 'apellido', 'fecha_nac',
    'telefono', 'documento', 'tipo_doc_id', 'dni',
    'correo', 'direccion', 'rol_id', 'id_estado', 'contrasena'] })
        .then(user => {
            if (user) {
                res.status(200).send({
                    user,
                    msg: "Usuario creado correctamente"
                });
            } else {
                res.status(400).send('Error in insert new record');
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const updateOneUser = async(req = request, res = response) => {

    // pass encrypt
    const salt = bcryptjs.genSaltSync();
    const pass = bcryptjs.hashSync( req.body.contrasena, salt );
    await User.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_nac: req.body.fecha_nac,
        telefono: req.body.telefono,
        documento: req.body.documento,
        tipo_doc_id: req.body.tipo_doc_id,
        dni: req.body.dni,
        correo: req.body.correo,
        direccion: req.body.direccion,
        rol_id: req.body.rol_id,
        id_estado: req.body.id_estado,
        contrasena: pass,
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(user => {
            if (use != 0) {
                res.status(200).send(`Usuario con id: ${req.params.id} fue actualizado correctamente`);
            }else{
                res.status(404).send(`Usuario con id: ${req.params.id} no encontrado`);
            }
            
        }).catch(error => {
            console.log(error);
        });
};

const deleteOneUser = async(req = request, res = response) => {

        await User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(user => {
                if (user != 0) {
                    res.status(200).send(`Usuario con id: ${req.params.id} fue borrado correctamente`);
                }else{
                    res.status(404).send(`Usuario con id: ${req.params.id} no encontrado`);
                }
                
            }).catch(error => {
                console.log(error);
            })
    
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
};