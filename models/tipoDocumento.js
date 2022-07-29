const { Sequelize, DataTypes } = require('sequelize');

//Importación de parámetros de conexión MySQL con sequelize
const { sequelize } = require('../database/config');

const TDocument = sequelize.define('tipo_documentos', {
    // Model attributes are defined here
    //id: {type: Sequelize.INTEGER, primaryKey: true},
    tipo_documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
});

  // `sequelize.define` also returns the model
  console.log(TDocument === sequelize.models.TDocument); // true

module.exports = TDocument;
