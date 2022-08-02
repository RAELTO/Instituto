const { Router } = require('express');

const { check } = require('express-validator');

const { valFields } = require('../middlewares/val-fields');
const { courseExistingId, AreaExistsId,  } = require('../helpers/db-validator');


const { getAllCourses,
        getOneCourse,
        createNewCourse,
        updateOneCourse,
        deleteOneCourse } = require('../controllers/cursoController');


const router = Router();

router.get('/', getAllCourses);

router.get('/:id', [
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( courseExistingId ),
    valFields
], getOneCourse);

router.put('/:id', [
    check('id').custom( courseExistingId ),
    check('area_estudio_id').custom( AreaExistsId ),
    valFields
], updateOneCourse);

router.post('/', [ //arreglo de middlewares express-validator
check('nombre_curso', 'El nombre es obligatorio').not().isEmpty(),
check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
check('cupo_disponible', 'Ingresa un valor válido').isNumeric(),
check('cupo_disponible', 'el cupo disponible del grupo es obligatorio').not().isEmpty(),
check('area_estudio_id', 'Ingresa un valor válido').isNumeric(),
check('area_estudio_id', 'El area del curso es obligatoria').not().isEmpty(),
check('area_estudio_id').custom( AreaExistsId ),
check('fecha_limite_curso', 'La fecha limite del curso es obligatoria').not().isEmpty(),
check('fecha_limite_curso', 'No es una fecha válida').isDate(),
check('estado_curso', 'El estado del curso es obligatorio').not().isEmpty(),
check('estado_curso', 'El estado del curso es obligatorio').isBoolean(),
check('img_curso', 'La imagen del curso es obligatoria').not().isEmpty(),

valFields
], createNewCourse);

router.delete('/:id', deleteOneCourse);

module.exports = router;