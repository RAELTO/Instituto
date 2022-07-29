const { response, request } = require('express');
const StatusU = require('../models/estadoUsuario');

const getAllStatusU = async(req = request, res = response) => {//obtener todos los cursos
    await StatusU.findAll({attributes:[
        'id', 'estado_usuario'
    ]})
        .then(estado => {
            const data = JSON.stringify(estado);
            const results = JSON.parse(data);
            if (results.length > 0) {
                res.json({
                    results
                });
            }else{
                res.status(404).send('No hay tipos de estados de usuarios registrados');
            }
        }).catch(error => {
            console.log(error);
        });
};

const getOneStatusU = async(req = request, res = response) => {
    //res.send(`Get course ${req.params.id}`);
    await StatusU.findOne({attributes:[
        'id', 'estado_usuario'
    ], where: { id: req.params.id } })
        .then(estado => {
            const data = JSON.stringify(estado);
            const results = JSON.parse(data);
            if (results != null) {
                res.json({
                    results
                });
            }else{
                res.status(404).send(`Tipo de estado de usuario con id: ${req.params.id} no encontrado`);
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};


module.exports = {
    getAllStatusU,
    getOneStatusU,
    
};