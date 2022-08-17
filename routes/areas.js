const { Router } = require('express');
const { check } = require('express-validator'); //para validaciones del body con check

const {
    valFields,
    valJWT,
    adminRole,
    hasRole
} = require('../middlewares');

const { areaExistingId, areaValidator } = require('../helpers/db-validator');

const { getAllAreas,
        getOneArea,
        createNewArea,
        updateOneArea,
        deleteOneArea } = require('../controllers/areasController');


const router = Router();

router.get('/', valJWT, getAllAreas);

router.get('/:id', [
    valJWT,
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( areaExistingId ),
    valFields
], getOneArea);

router.put('/:id', [
    valJWT,
    adminRole,
    hasRole(1),
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( areaExistingId ),
    check('area_estudio', 'El area de estudio es obligatoria').not().isEmpty(),
    valFields
], updateOneArea);

router.post('/', [
    valJWT,
    adminRole,
    hasRole(1),
    check('area_estudio', 'El area de estudio es obligatoria').not().isEmpty(),
    check('area_estudio').custom( areaValidator ),
    valFields
], createNewArea);

router.delete('/:id', [
    valJWT,
    adminRole,
    hasRole(1),
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( areaExistingId ),
    valFields
], deleteOneArea);

module.exports = router;