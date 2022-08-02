//const { Areas, Role, User, Course } = require('../models');
const User = require('../models/usuarios');
const Role = require('../models/roles');
const StatusU = require('../models/estadoUsuario');
const TDocument = require('../models/tipoDocumento');
const Course = require('../models/cursos');
const Area = require('../models/areas')

//Validar si un rol es valido comparando con los disponibles en la DB
const validRoles = async(id = '') => {
    const role_Exists = await Role.findOne({ where: { id: id } });
    if ( !role_Exists ) {
            throw new Error(`El rol con id: ${id} no se encuentra registrado en la DB`);
    }
}

//Validar si un tipo de documento es valido comparando con los disponibles en la DB
const validDocType = async(id = '') => {
    const docExists = await TDocument.findOne({ where: { id: id } });
    if ( !docExists ) {
            throw new Error(`El tipo de documento con id: ${id} no se encuentra registrado en la Base de datos`);
    }
}

//Validar si un correo ya esta registrado en la DB
const emailValidator = async(correo = '') => {
    
    const emailExists = await User.findOne({ where: { correo: correo } });
    if ( emailExists ){
        throw new Error(`El correo: ${correo}, ya se encuentra registrado`);
    }

}

//Validar si un número de documento ya esta registrado en la DB
const docValidator = async(dni = '') => {
    
    const dniExists = await User.findOne({ where: { dni: dni } });
    if ( dniExists ){
        throw new Error(`El documento número: ${dni}, ya se encuentra registrado`);
    }

}

//Validar si un usuario existe en la DB -- validador personalizado
const userExistingId = async(id = '') => {
    
    const userExisting = await User.findByPk(id);
    if ( !userExisting ){
        throw new Error(`No existe un usuario con el id: ${id}`);
    }

}

//Validar si un estado de usuario existe en la DB -- validador personalizado
const userStatusExistsId = async(id = '') => {
    
    const userExisting = await StatusU.findByPk(id);
    if ( !userExisting ){
        throw new Error(`No existe un estado de usuario con el id: ${id}`);
    }

}

//Validar si la area de estudio existe en la DB -- validador personalizado
const categoryExistingId = async(id = '') => {
    
    const categoryExisting = await Area.findById(id);
    if ( !categoryExisting ){
        throw new Error(`No existe una categoria con el id: ${id}`);
    }

}

//Validar si el curso existe en la DB -- validador personalizado
const productExistingId = async(id = '') => {
    
    const productExisting = await Product.findById(id);
    if ( !productExisting ){
        throw new Error(`No existe un producto con el id: ${id}`);
    }

}

//Validar si el curso existe en la DB -- validador personalizado
const courseExistingId = async(id = '') => {
    
    const courseExisting = await Course.findByPk(id);
    if ( !courseExisting ){
        throw new Error(`No existe un curso con el id: ${id}`);
    }

}

const AreaExistsId = async(id = '') => {
    
    const areaExisting = await Area.findByPk(id);
    if ( !areaExisting ){
        throw new Error(`No existe una Area de cursos con el id: ${id}`);
    }

}




module.exports = {
    validRoles,
    emailValidator,
    userExistingId,
    categoryExistingId,
    productExistingId,
    validDocType,
    userStatusExistsId,
    docValidator,
    courseExistingId,
    AreaExistsId
}