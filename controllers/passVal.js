//controlador para login o autenticación
const { response } = require("express");
const bcryptjs = require('bcryptjs');

const User = require('../models/usuarios');

const passValidate = async(req, res = response) => {

    const { id, contra_act } = req.body;
    try {
        
        const user = await User.findByPk(id);
        //Verificar si el usuario esta activo
        if(!user.id_estado){
            return res.status(400).json({
                msg: "Usuario / Contraseña incorrecta - status: false",
                validLogin: false
            });
        }

        // Verficiar la contraseña
        const validPassword = bcryptjs.compareSync( contra_act, user.contrasena );//compara la passw del body vs la del usuario, retorna un booleano
        if (!validPassword) {
            return res.status(400).json({
                msg: "La contraseña no coincide - password",
                passMatch: false
            });
        }

        res.json({
            user,
            passMatch: true
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Consulte con el administrador"
        })
    }

}

module.exports = {
    passValidate
}