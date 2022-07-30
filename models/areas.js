const { Sequelize, DataTypes } = require('sequelize');

//Importación de parámetros de conexión MySQL con sequelize
const { sequelize } = require('../database/config');

const Areas = sequelize.define('areas_estudio', {
    // Model attributes are defined here
    //id: {type: Sequelize.INTEGER, primaryKey: true},
    area_estudio: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
});

  // `sequelize.define` also returns the model
  console.log(Areas === sequelize.models.Areas); // true

module.exports = Areas;