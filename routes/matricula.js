const { Router } = require('express');

const { check } = require('express-validator');

const {
    valFields, 
    valJWT, 
    adminRole, 
    hasRole
} = require('../middlewares');
const { registrationExistingId, userExistingId, StatusRegExistsId  } = require('../helpers/db-validator');



const { getAllRegistration,
        getOneRegistration,
        createNewRegistration,
        updateOneRegistration,
        deleteOneRegistration } = require('../controllers/matriculaController');


const router = Router();

router.get('/', getAllRegistration);

router.get('/:id',[
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( registrationExistingId ),
    valFields
], getOneRegistration);

router.put('/:id',[
    valJWT,//si este da error no ejecutara el resto, por eso este middleware debe ser el primero en ejecutarse
    adminRole,//este middleware obliga a que sea admin
    hasRole(1), //este dice que puede cualquiera de los roles especificados
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( registrationExistingId ),
    check('alumno_id').custom( userExistingId ),
    check('estado_id').custom(StatusRegExistsId),
    valFields
], updateOneRegistration);

router.post('/', [ //arreglo de middlewares express-validator
valJWT,//si este da error no ejecutara el resto, por eso este middleware debe ser el primero en ejecutarse
adminRole,//este middleware obliga a que sea admin
hasRole(1), //este dice que puede cualquiera de los roles especificados
check('alumno_id', 'El alumno es obligatorio').not().isEmpty(),
check('alumno_id').custom(userExistingId),
check('estado_id', 'El estado de la matricula es obligatorio').not().isEmpty(),
check('estado_id').custom(StatusRegExistsId),
check('fecha_matricula', 'La fecha de la matricula es obligatoria').not().isEmpty(),
check('fecha_matricula', 'No es una fecha válida').isDate(),
check('precio_matricula', 'El precio de la matricula es obligatorio').not().isEmpty(),
check('precio_matricula', 'No es un monto valido').isDecimal(),

valFields
], createNewRegistration);

router.delete('/:id', [
    valJWT,//si este da error no ejecutara el resto, por eso este middleware debe ser el primero en ejecutarse
    adminRole,//este middleware obliga a que sea admin
    hasRole(1), //este dice que puede cualquiera de los roles especificados
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( registrationExistingId ),
    valFields
], deleteOneRegistration);

module.exports = router;