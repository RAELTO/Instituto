const { Router } = require('express');

const { check } = require('express-validator');

const {
    valFields,
    valJWT,
    adminRole,
    hasRole,
    validateFileUpload
} = require('../middlewares'); //importación de los middlewares que serán usado para validaciones en las peticiones

const { courseExistingId, areaExistingId, courseValidator } = require('../helpers/db-validator'); //importación de validaciones de la base de datos


const { getAllCourses,
        getOneCourse,
        createNewCourse,
        updateOneCourse,
        deleteOneCourse } = require('../controllers/cursoController'); //importación de los controladores para cursos


const router = Router();

router.get('/', valJWT, getAllCourses); // ejecuta la petición GET y su controlador desde el path "/" en la ruta establecida desde el servidor

router.get('/:id', [ //ejecuta la petición GET especificando un id en los params de la ruta establecida /id
    valJWT,
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( courseExistingId ),
    valFields
], getOneCourse);

router.put('/:id', [
    valJWT,
    adminRole,
    hasRole(1),
    check('id').custom( courseExistingId ),
    check('area_estudio_id').custom( areaExistingId ),
    valFields
], updateOneCourse);

router.post('/', [ //arreglo de middlewares express-validator
    valJWT,
    adminRole,
    hasRole(1),
    check('nombre_curso', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre_curso').custom( courseValidator ),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('cupo_disponible', 'Ingresa un valor válido').isNumeric(),
    check('cupo_disponible', 'el cupo disponible del grupo es obligatorio').not().isEmpty(),
    check('area_estudio_id', 'Ingresa un valor válido').isNumeric(),
    check('area_estudio_id', 'El area del curso es obligatoria').not().isEmpty(),
    check('area_estudio_id').custom( areaExistingId ),
    check('fecha_limite_curso', 'La fecha limite del curso es obligatoria').not().isEmpty(),
    check('fecha_limite_curso', 'No es una fecha válida').isDate(),
    check('estado_curso', 'El estado del curso es obligatorio').not().isEmpty(),
    check('estado_curso', 'El estado del curso es obligatorio').isBoolean(),
    validateFileUpload,
    valFields
], createNewCourse);

router.delete('/:id', [
    valJWT,
    adminRole,
    hasRole(1),
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( courseExistingId ),
    valFields
],deleteOneCourse);

module.exports = router;