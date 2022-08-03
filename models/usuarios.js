
const { Sequelize, DataTypes } = require('sequelize');

//Importación de parámetros de conexión MySQL con sequelize
const { sequelize } = require('../database/config');

const User = sequelize.define('usuarios', {
    // Model attributes are defined here
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true if not specified
    },
    fecha_nac: {
        type: DataTypes.DATE,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_doc_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_estado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
});

  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User); // true

module.exports = User;
