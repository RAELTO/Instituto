const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/usuarios');

const valJWT = async(req = request, res = response, next) => {

    const token = req.header('x-token');//segun se especifique aqui asi se debe enviar desde el frontend

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }

    try {
        
        const { uid } = jwt.verify( token, process.env.SECRET_KEY );

        // leer el usuario que corresponde al uid
        const user = await User.findByPk( uid );
        
        if (!user) {
            return res.status(401).json({
                msg: 'Token no válido - user does not exist in DB'
            })
        }

        // Verificar si el uid tiene status: true
        let status = '';
        switch (user.id_estado) {
            case 1:
                status = true
                break;
            case 0:
                status = false
                break;
        
            default:
                break;
        }
        if (!status) {
            return res.status(401).json({
                msg: 'Token no válido - user status: false'
            })
        }

        req.user = user;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}


module.exports = {
    valJWT
}
