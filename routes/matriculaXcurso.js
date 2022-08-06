const { Router } = require('express');


const { check } = require('express-validator');

const {
    valFields, 
    valJWT, 
    adminRole, 
    hasRole
} = require('../middlewares');
const { registrationExistingId, registrationCourseExistingId , courseExistingId } = require('../helpers/db-validator');



const { getAllRegistrationCourse,
        getOneRegistrationCourse,
        createNewRegistrationCourse,
        updateOneRegistrationCourse,
        deleteOneRegistrationCourse } = require('../controllers/matriculaXcursoController');


const router = Router();

router.get('/', getAllRegistrationCourse);

router.get('/:id', [
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( registrationCourseExistingId ),
    valFields
], getOneRegistrationCourse);

router.put('/:id', [
    valJWT,//si este da error no ejecutara el resto, por eso este middleware debe ser el primero en ejecutarse
    adminRole,//este middleware obliga a que sea admin
    hasRole(1), //este dice que puede cualquiera de los roles especificados
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( registrationCourseExistingId ),
    check('id_matr').custom( registrationExistingId ),
    check('id_curso').custom(courseExistingId),
    // check('id_matr', 'id_curso').custom(courseValidator),
    valFields
], updateOneRegistrationCourse);

router.post('/', [
    valJWT,//si este da error no ejecutara el resto, por eso este middleware debe ser el primero en ejecutarse
    adminRole,//este middleware obliga a que sea admin
    hasRole(1), //este dice que puede cualquiera de los roles especificados
    check('id_matr', 'No es un valor valido').isNumeric(),
    check('id_matr').custom( registrationExistingId ),
    check('id_curso', 'No es un valor valido').isNumeric(),
    check('id_curso').custom(courseExistingId),
    // check('id_matr', 'id_curso').custom(courseValidator),
    valFields
], createNewRegistrationCourse);

router.delete('/:id',  [
    valJWT,//si este da error no ejecutara el resto, por eso este middleware debe ser el primero en ejecutarse
    adminRole,//este middleware obliga a que sea admin
    hasRole(1), //este dice que puede cualquiera de los roles especificados
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( registrationCourseExistingId),
    valFields
],deleteOneRegistrationCourse);

module.exports = router;