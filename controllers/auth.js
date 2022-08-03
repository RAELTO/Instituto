//controlador para login o autenticación
const { response } = require("express");
const bcryptjs = require('bcryptjs');

const User = require('../models/usuarios');

const { genJWT } = require("../helpers/gen-jwt");

const login = async(req, res = response) => {

    const { correo, contrasena } = req.body;
    try {
        
        //Verificar si el email existe
        const user = await User.findOne({ where: { correo: correo } });
        if(!user){
            return res.status(400).json({
                msg: "Usuario / Contraseña incorrecta - email",
                validLogin: false
            });
        }
        
        //Verificar si el usuario esta activo
        if(!user.id_estado){
            return res.status(400).json({
                msg: "Usuario / Contraseña incorrecta - status: false",
                validLogin: false
            });
        }

        // Verficiar la contraseña
        const validPassword = bcryptjs.compareSync( contrasena, user.contrasena );//compara la passw del body vs la del usuario, retorna un booleano
        if (!validPassword) {
            return res.status(400).json({
                msg: "Usuario / Contraseña incorrecta - password",
                validLogin: false
            });
        }

        // Generar el JWT
        const token = await genJWT( user.id );

        res.json({
            user,
            token,
            validLogin: true
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Consulte con el administrador"
        })
    }

}

module.exports = {
    login
}