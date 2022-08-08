const { Router } = require('express');
const { check } = require('express-validator');

const { valFields, 
    validateFileUpload, 
    valJWT, 
    adminRole, 
    hasRole } = require('../middlewares');
const { updateImageCloudinary } = require('../controllers/uploads');
const { allowedTables } = require('../helpers/db-validator');


const router = Router();

router.put('/:table/:id', [
    valJWT,
    adminRole,
    hasRole(1),
    validateFileUpload,
    check('id', 'Ingrese un id válido').isNumeric(),
    check('table').custom( c => allowedTables(c, ['usuarios', 'cursos']) ),
    valFields
], updateImageCloudinary);

module.exports = router;