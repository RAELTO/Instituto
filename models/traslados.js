const { Sequelize, DataTypes } = require('sequelize');

//Importación de parámetros de conexión MySQL con sequelize
const { sequelize } = require('../database/config');

const Transfers = sequelize.define('traslados', {
    // Model attributes are defined here
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    motivo_traslado:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_matricula_curso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    nuevo_curso_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        // allowNull defaults to true if not specified
    },
    curso_anterior_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        // allowNull defaults to true if not specified
    },
    
    
}, {
    // Other model options go here
});

  // `sequelize.define` also returns the model
  console.log(Transfers === sequelize.models.Transfers); // true

module.exports = Transfers;
