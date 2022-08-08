const { Sequelize, DataTypes } = require('sequelize');

//Importación de parámetros de conexión MySQL con sequelize
const { sequelize } = require('../database/config');

const Course = sequelize.define('cursos', {
    // Model attributes are defined here
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre_curso: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true if not specified
    },
    cupo_disponible: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    area_estudio_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_limite_curso: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado_curso: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
    },
}, {
    // Other model options go here
});

  // `sequelize.define` also returns the model
  console.log(Course === sequelize.models.Course); // true

module.exports = Course;
