const { response } = require('express');


const adminRole = (req, res = response, next) => {

    if (!req.user) {
        return res.status(500).json({
            
            msg: 'Validar el token primero para verificar rol'

        });
    }


    const { rol, nombre } = req.user;

    if( rol !== 'ADMIN_ROLE' ){
        return res.status(401).json({
            msg: `${nombre} no es administrador - No puede realizar la accion`
        });
    }

    next();
}

const hasRole = ( ...roles ) =>{

    return (req, res = response, next) => {

        if (!req.user) {
            return res.status(500).json({
                msg: 'Validar el token primero para verificxar rol'
            });
        }

        if (!roles.includes( req.user.role )) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles: ${roles}`
            })
        }

        next();
    }
    
}

module.exports = {
    adminRole,
    hasRole
}
