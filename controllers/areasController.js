const { response, request } = require('express');
const Areas = require('../models/areas');

const getAllAreas = async(req = request, res = response) => {//obtener todos los cursos
    await Areas.findAll({attributes:[
        'id', 'area_estudio'
    ]})
        .then(area => {
            const data = JSON.stringify(area);
            const results = JSON.parse(data);
            if (results.length > 0) {
                res.json({
                    results
                });
            }else{
                res.status(404).send('No hay areas de estudio registradas');
            }
        }).catch(error => {
            console.log(error);
        });
};

const getOneArea = async(req = request, res = response) => {
    await Areas.findOne({attributes:[
        'id', 'area_estudio',
    ], where: { id: req.params.id } })
        .then(area => {
            const data = JSON.stringify(area);
            const results = JSON.parse(data);
            if (results != null) {
                res.json({
                    results
                });
            }else{
                res.status(404).send(`Area de estudio con id: ${req.params.id} no encontrada`);
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const createNewArea = async(req = request, res = response) => {
    await Areas.create({
        area_estudio: req.body.area_estudio.toUpperCase()
    }, { fields: ['area_estudio'] })
        .then(area => {
            if (area) {
                res.send({
                    area,
                    msg: 'Area de estudio creada correctamente'
                });
                
            } else {
                res.status(400).send('Error while insert new area record');
            }
            
        }).catch(error => {
            console.log(error);
        });
    
};

const updateOneArea = async(req = request, res = response) => {
    await Areas.update({ 
        area_estudio: req.body.area_estudio.toUpperCase()
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(area => {
            if (area != 0) {
                res.status(200).send(`Area de estudio con id: ${req.params.id} fue actualizada correctamente`);
            }else{
                res.status(404).send(`Area de estudio con id: ${req.params.id} no encontrada`);
            }
            
        }).catch(error => {
            console.log(error);
        });
};

const deleteOneArea = async(req = request, res = response) => {
        await Areas.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(area => {
                if (area != 0) {
                    res.status(200).send(`Area de estudio con id: ${req.params.id} fue borrada correctamente`);
                }else{
                    res.status(404).send(`Area de estudio con id: ${req.params.id} no encontrada`);
                }
                
            }).catch(error => {
                console.log(error);
            })
    
};

module.exports = {
    getAllAreas,
    getOneArea,
    createNewArea,
    updateOneArea,
    deleteOneArea
};