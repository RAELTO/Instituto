const { Router } = require('express');
const { check } = require('express-validator');

const { valFields } = require('../middlewares/val-fields');
const { validRoles, emailValidator, userExistingId, 
    validDocType, userStatusExistsId, docValidator } = require('../helpers/db-validator');

const { getAllUsers,
        getOneUser,
        createNewUser,
        updateOneUser,
        deleteOneUser } = require('../controllers/usuarioController');


const router = Router();

router.get('/', getAllUsers);

router.get('/:id' , [
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( userExistingId ),
    valFields
], getOneUser);

router.put('/:id', [
    check('id').custom( userExistingId ),
    check('role').custom( validRoles ),
    valFields
], updateOneUser);

router.post('/', [//arreglo de middlewares express-validator
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('fecha_nac', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    check('fecha_nac', 'No es una fecha válida').isDate(),
    check('telefono', 'El teléfono es obligatorio').not().isEmpty(),
    check('tipo_doc_id', 'No es un número de documento válido').isNumeric(),
    check('tipo_doc_id', 'El tipo de documento es obligatorio').not().isEmpty(),
    check('tipo_doc_id').custom( validDocType ),
    check('dni', 'El documento nacional de identificación es obligatorio').not().isEmpty(),
    check('dni').custom( docValidator ),
    check('correo', 'El correo ingresado no es válido').isEmail(),
    check('correo').custom( emailValidator ),
    check('direccion', 'La dirección es obligatoria').not().isEmpty(),
    //check('role', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol_id').custom( validRoles ),
    check('id_estado').custom( userStatusExistsId ),
    check('contrasena', 'La contraseña es obligatoria y debe contener un mínimo de 8 caracteres').isLength({ min: 8 }),
    valFields
],createNewUser);

router.delete('/:id', deleteOneUser);

module.exports = router;