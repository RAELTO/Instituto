const cloudinary = require('cloudinary').v2

cloudinary.config( process.env.CLOUDINARY_URL );

const { response, request } = require("express");

const { User, Course } = require('../models')

const updateImageCloudinary = async(req, res = response) => {

    const {id, table} = req.params;

    let model;

    switch (table) {
        case 'usuarios':
            model = await User.findByPk(id);
            if ( !model ) {
                return res.status(400).json({
                    msg: `No existe un usuario con el id ${id}`
                });
            }
            break;

        case 'cursos':
            model = await Course.findByPk(id);
            if ( !model ) {
                return res.status(400).json({
                    msg: `No existe un producto con el id ${id}`
                });
            }
            break;
    
        default:
            return res.status(500).json({
                msg: 'Se me olvidó validar esto'
            });
    }

    //Limpiar imagenes previas
    if (model.img) {
        const nombreArr = model.img.split('/');
        const nombre = nombreArr[nombreArr.length - 1];
        const [ public_id ] = nombre.split('.'); //id publico de cloudinary
        cloudinary.uploader.destroy( public_id ); //metodo de cloudinary que borra segun el public id
    }

    const { tempFilePath } = req.files.archivo

    const { secure_url } = await cloudinary.uploader.upload( tempFilePath );

    model.img = secure_url;

    await model.save();

    res.json({model});

};

module.exports = {
    updateImageCloudinary
};