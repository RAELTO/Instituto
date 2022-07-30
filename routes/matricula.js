const { Router } = require('express');

const { getAllRegistration,
        getOneRegistration,
        createNewRegistration,
        updateOneRegistration,
        deleteOneRegistration } = require('../controllers/matriculaController');


const router = Router();

router.get('/', getAllRegistration);

router.get('/:id', getOneRegistration);

router.put('/:id', updateOneRegistration);

router.post('/', createNewRegistration);

router.delete('/:id', deleteOneRegistration);

module.exports = router;