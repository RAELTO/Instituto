const { Sequelize, DataTypes } = require('sequelize');

//Importación de parámetros de conexión MySQL con sequelize
const { sequelize } = require('../database/config');

const estMatricula = sequelize.define('estado_matriculas', {
    // Model attributes are defined here
    //id: {type: Sequelize.INTEGER, primaryKey: true},
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
});

  // `sequelize.define` also returns the model
  console.log(estMatricula === sequelize.models.estMatricula); // true

module.exports = estMatricula;