const { Sequelize, DataTypes } = require('sequelize');

//Importación de parámetros de conexión MySQL con sequelize
const { sequelize } = require('../database/config');

const Registration = sequelize.define('matricula', {
    // Model attributes are defined here
    //id: {type: Sequelize.INTEGER, primaryKey: true},
    alumno_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        // allowNull defaults to true if not specified
    },
    fecha_matricula: {
        type: DataTypes.DATE,
        allowNull: false
    },
    precio_matricula: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
   
}, {
    // Other model options go here
});

  // `sequelize.define` also returns the model
  console.log(Registration === sequelize.models.Registration); // true

module.exports = Registration;
