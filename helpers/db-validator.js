
const { 
    Course, estMatricula, Registration, RegistrationCourse, Role, StatusU,
    TDocument, User, Areas
} = require('../models');

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
const areaExistingId = async(id = '') => {
    
    const areaExisting = await Areas.findByPk(id);
    if ( !areaExisting ){
        throw new Error(`No existe un area de estudio con el id: ${id}`);
    }

}

//Validar si el curso existe en la DB -- validador personalizado
const courseExistingId = async(id = '') => {
    
    const courseExisting = await Course.findByPk(id);
    if ( !courseExisting ){
        throw new Error(`No existe un curso con el id: ${id}`);
    }

}

//Validar si un area de estudio ya esta registrada en la DB
const areaValidator = async(area_estudio = '') => {
    
    const areaExists = await Areas.findOne({ where: { area_estudio: area_estudio } });
    if ( areaExists ){
        throw new Error(`El area de estudio ${area_estudio}, ya se encuentra registrada`);
    }
}

//Validar si un curso ya está registrado en la DB
const courseValidator = async(nombre_curso = '') => {
    
    const courseExists = await Course.findOne({ where: { nombre_curso: nombre_curso } });
    if ( courseExists ){
        throw new Error(`El curso ${nombre_curso}, ya se encuentra registrado`);
    }
}


//Validad si una matricula existe en la BD
const registrationExistingId = async(id = '') => {
    
    const registrationExisting = await Registration.findByPk(id);
    if ( !registrationExisting ){
        throw new Error(`No existe una matricula con el id: ${id}`);
    }

}

//Validar si un estado de usuario existe en la DB -- validador personalizado
const StatusRegExistsId = async(id = '') => {
    
    const  StatusRegExists = await estMatricula.findByPk(id);
    if ( ! StatusRegExists ){
        throw new Error(`No existe un estado de matricula con el id: ${id}`);
    }

}


//matriculas x curso


//Validad si una matricula por cursos existe en la BD
const registrationCourseExistingId = async(id = '') => {
    
    const registrationCourseExisting = await RegistrationCourse.findByPk(id);
    if ( !registrationCourseExisting ){
        throw new Error(`No existe una matricula con cursos con el id: ${id}`);
    }

}


//Validar que un curso este registrado en una misma matricula 
const courseValidator = async(id_matr = '', id_curso = '') => {
    console.log(id_matr, id_curso);
    const courseExists = await RegistrationCourse.findOne({ where: { id_matr: id_matr, id_curso: id_curso } });
    if ( courseExists ){
        throw new Error(`El curso con id: ${id_curso}, ya se encuentra registrado`);
    }

}



module.exports = {
    validRoles,
    emailValidator,
    userExistingId,
    courseExistingId,
    validDocType,
    userStatusExistsId,
    docValidator,
    areaExistingId,
    areaValidator,
    courseExistingId,
    courseValidator,
    registrationExistingId,
    StatusRegExistsId,
    registrationCourseExistingId,
    courseValidator
}