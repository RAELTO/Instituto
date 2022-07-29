const { response, request } = require('express');
const TDocument = require('../models/tipoDocumento');

const getAllTDocument = async(req = request, res = response) => {//obtener todos los cursos
    await TDocument.findAll({attributes:[
        'id', 'tipo_documento'
    ]})
        .then(document => {
            const data = JSON.stringify(document);
            const results = JSON.parse(data);
            if (results.length > 0) {
                res.json({
                    results
                });
            }else{
                res.status(404).send('No hay tipos de documentos registrados');
            }
        }).catch(error => {
            console.log(error);
        });
};

const getOneTDocument = async(req = request, res = response) => {
    //res.send(`Get course ${req.params.id}`);
    await TDocument.findOne({attributes:[
        'id', 'tipo_documento'
    ], where: { id: req.params.id } })
        .then(document => {
            const data = JSON.stringify(document);
            const results = JSON.parse(data);
            if (results != null) {
                res.json({
                    results
                });
            }else{
                res.status(404).send(`Tipo de documento con id: ${req.params.id} no encontrado`);
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};


module.exports = {
    getAllTDocument,
    getOneTDocument,
    
};