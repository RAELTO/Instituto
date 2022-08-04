
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

//FK to users
User.belongsTo(Role, {foreignKey: 'rol_id'});
Role.hasMany(User, {foreignKey: 'rol_id'});
User.belongsTo(TDocument, {foreignKey: 'tipo_doc_id'});
TDocument.hasMany(User, {foreignKey: 'tipo_doc_id'});

//FK para Matriculas
Registration.belongsTo(estMatricula, {foreignKey: 'estado_id'});
estMatricula.hasMany(Registration, {foreignKey: 'estado_id'});
Registration.belongsTo(User, {foreignKey: 'alumno_id'});
User.hasMany(Registration, {foreignKey: 'alumno_id'});

//FK Para matriculas X cursos
RegistrationCourse.belongsTo(Registration, {foreignKey: 'id_matr'});
Registration.hasMany(RegistrationCourse, {foreignKey: 'id_matr'});
RegistrationCourse.belongsTo(Course, {foreignKey: 'id_curso'});
Course.hasMany(RegistrationCourse, {foreignKey: 'id_curso'});

//FK para cursos
Course.belongsTo(Areas, {foreignKey: 'area_estudio_id'});
Areas.hasMany(Course, {foreignKey: 'area_estudio_id'});

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
