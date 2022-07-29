const { Sequelize, DataTypes } = require('sequelize');

//Importación de parámetros de conexión MySQL con sequelize
const { sequelize } = require('../database/config');

const StatusU = sequelize.define('estados_usuarios', {
    // Model attributes are defined here
    //id: {type: Sequelize.INTEGER, primaryKey: true},
    estado_usuario: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    // Other model options go here
});

  // `sequelize.define` also returns the model
  console.log(StatusU === sequelize.models.StatusU); // true

module.exports = StatusU;
