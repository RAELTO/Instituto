const { response, request } = require('express');
const estMatricula = require('../models/estadoMatricula');

const getAllEstMatricula = async(req = request, res = response) => {//obtener todos los roles
    await estMatricula.findAll({attributes:[
        'id', 'estado'
    ]})
        .then(estado => {
            const data = JSON.stringify(estado);
            const results = JSON.parse(data);
            if (results.length > 0) {
                res.json({
                    results
                });
            }else{
                res.status(404).send('No hay estados de matrícula registrados');
            }
        }).catch(error => {
            console.log(error);
        });
};

module.exports = {
    getAllEstMatricula,
};