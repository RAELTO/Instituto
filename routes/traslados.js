const { Router } = require('express');


const { check } = require('express-validator');

const {
    valFields, 
    valJWT, 
    adminRole, 
    hasRole
} = require('../middlewares');
const { registrationExistingId, registrationCourseExistingId , courseExistingId, transferExistingId } = require('../helpers/db-validator');



const { getAllTransfer,
        getOneTransfer,
        createNewTransfer,
        updateOneTransfer,
        deleteOneTransfer} = require('../controllers/trasladosController.js');


const router = Router();

router.get('/', getAllTransfer);

router.get('/:id', [
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( transferExistingId ),
    valFields
], getOneTransfer);

router.put('/:id', [
    valJWT,//si este da error no ejecutara el resto, por eso este middleware debe ser el primero en ejecutarse
    adminRole,//este middleware obliga a que sea admin
    hasRole(1), //este dice que puede cualquiera de los roles especificados
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom(transferExistingId),
    check(' motivo_traslado', 'El motivo es obligatorio').not().isEmpty(),
    check('id_matricula_curso', 'No es un ID de matricula válido').isNumeric(),
    check('id_matricula_curso').custom(registrationExistingId),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    check(' nuevo_curso_id', 'No es un ID de curso válido').isNumeric(),
    check(' nuevo_curso_id').custom(courseExistingId),
    check('curso_anterior_id', 'No es un ID de curso válido').isNumeric(),
    check(' curso_anterior_id').custom(courseExistingId),
    // check('id_matr', 'id_curso').custom(courseValidator),
    valFields
], updateOneTransfer);

router.post('/', [
    valJWT,//si este da error no ejecutara el resto, por eso este middleware debe ser el primero en ejecutarse
    adminRole,//este middleware obliga a que sea admin
    
    check(' motivo_traslado', 'El motivo es obligatorio').not().isEmpty(),
    check('id_matricula_curso', 'No es un ID de matricula válido').isNumeric(),
    check('id_matricula_curso').custom(registrationExistingId),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    check(' nuevo_curso_id', 'No es un ID de curso válido').isNumeric(),
    check(' nuevo_curso_id').custom(courseExistingId),
    check('curso_anterior_id', 'No es un ID de curso válido').isNumeric(),
    check(' curso_anterior_id').custom(courseExistingId),
    // check('id_matr', 'id_curso').custom(courseValidator),
    valFields
], createNewTransfer);

router.delete('/:id',  [
    valJWT,//si este da error no ejecutara el resto, por eso este middleware debe ser el primero en ejecutarse
    adminRole,//este middleware obliga a que sea admin
    hasRole(1), //este dice que puede cualquiera de los roles especificados
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( transferExistingId),
    valFields
],deleteOneTransfer);

module.exports = router;