const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const { Role, TDocument, User } = require('../models');

const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL );

const getAllUsers = async(req = request, res = response) => {//obtener todos los cursos
    await User.findAll({attributes:[
        'id', 'nombre', 'apellido', 'fecha_nac',
        'telefono', 'documento', 'dni',
        'correo', 'direccion', 'id_estado', 'contrasena', 'img'
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
        'correo', 'direccion', 'id_estado', 'contrasena', 'img'
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

    if (req.body.documento === null) {
        req.body.documento = 'noPdfYet';
    }

    // pass encrypt
    const salt = bcryptjs.genSaltSync();

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
        contrasena: bcryptjs.hashSync( req.body.contrasena.toString(), salt )//encriptacion de una sola via,
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

        if (req.files) {
            const users = await User.findAll();
            let model;

            model = await User.findByPk(users[users.length - 1].dataValues.id);

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

const updateOneUser = async(req = request, res = response) => {

    if (req.body.contrasena) {
        // pass encrypt
        const salt = bcryptjs.genSaltSync();
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
            contrasena: bcryptjs.hashSync( req.body.contrasena.toString(), salt ),
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(user => {
                if (user != 0) {
                    res.status(200).send(`Usuario con id: ${req.params.id} fue actualizado correctamente`);
                }else{
                    res.status(404).send(`Usuario con id: ${req.params.id} no encontrado`);
                }
                
            }).catch(error => {
                console.log(error);
            });

        if (req.files) {
            let model;
            model = await User.findByPk(req.params.id);

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

    }else{
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
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(user => {
                if (user != 0) {
                    res.status(200).send(`Usuario con id: ${req.params.id} fue actualizado correctamente`);
                }else{
                    res.status(404).send(`Usuario con id: ${req.params.id} no encontrado`);
                }
                
            }).catch(error => {
                console.log(error);
            });

        
        if (req.files) {
            let model;
            model = await User.findByPk(req.params.id);

            //Limpiar imagenes previas
            if (model.img && model.documento) {
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

    }
};

const deleteOneUser = async(req = request, res = response) => {

    //Limpiar imagenes
    let model = await User.findByPk(req.params.id);
    if (model.img) {
        const nombreArr = model.img.split('/');
        const nombre = nombreArr[nombreArr.length - 1];
        const [ public_id ] = nombre.split('.'); //id publico de cloudinary
        cloudinary.uploader.destroy( public_id ); //metodo de cloudinary que borra segun el public id
    }

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