const { Router } = require('express');

const { getAllAreas,
        getOneArea,
        createNewArea,
        updateOneArea,
        deleteOneArea } = require('../controllers/areasController');


const router = Router();

router.get('/', getAllAreas);

router.get('/:id', getOneArea);

router.put('/:id', updateOneArea);

router.post('/', createNewArea);

router.delete('/:id', deleteOneArea);

module.exports = router;