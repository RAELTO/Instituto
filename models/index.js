
const Areas = require('./areas');
const Course = require('./cursos');
const Role = require('./roles');
const Server = require('./server');
const User = require('./usuarios');
const estMatricula = require('./estadoMatricula');
const StatusU = require('./estadoUsuario');
const Registration = require('./matricula');
const RegistrationCourse = require('./matriculaXcurso');
const TDocument = require('./tipoDocumento');

module.exports = {//es adecuado que este en orden alfabetico
    Areas,
    Course,
    estMatricula,
    Registration,
    RegistrationCourse,
    Role,
    Server,
    StatusU,
    TDocument,
    User
}
