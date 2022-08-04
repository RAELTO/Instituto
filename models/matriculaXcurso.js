const { Sequelize, DataTypes } = require('sequelize');

//Importación de parámetros de conexión MySQL con sequelize
const { sequelize } = require('../database/config');

const RegistrationCourse = sequelize.define('matricula_x_curso', {
    // Model attributes are defined here
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    id_matr: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_curso: {
        type: DataTypes.INTEGER,
        allowNull: false
        // allowNull defaults to true if not specified
    },
    
    
}, {
    // Other model options go here
});

  // `sequelize.define` also returns the model
  console.log(RegistrationCourse === sequelize.models.RegistrationCourse); // true

module.exports = RegistrationCourse;
