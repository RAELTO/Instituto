const { Router } = require('express');
const { check } = require('express-validator');

const { valFields } = require('../middlewares');

const { areaExistingId, areaValidator } = require('../helpers/db-validator');

const { getAllAreas,
        getOneArea,
        createNewArea,
        updateOneArea,
        deleteOneArea } = require('../controllers/areasController');


const router = Router();

router.get('/', getAllAreas);

router.get('/:id', [
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( areaExistingId ),
    valFields
], getOneArea);

router.put('/:id', [
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( areaExistingId ),
    check('area_estudio', 'El area de estudio es obligatoria').not().isEmpty(),
    valFields
], updateOneArea);

router.post('/', [
    check('area_estudio', 'El area de estudio es obligatoria').not().isEmpty(),
    check('area_estudio').custom( areaValidator ),
    valFields
], createNewArea);

router.delete('/:id', [
    check('id', 'No es un ID válido').isNumeric(),
    check('id').custom( areaExistingId ),
    valFields
], deleteOneArea);

module.exports = router;