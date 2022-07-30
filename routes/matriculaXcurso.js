const { Router } = require('express');

const { getAllRegistrationCourse,
        getOneRegistrationCourse,
        createNewRegistrationCourse,
        updateOneRegistrationCourse,
        deleteOneRegistrationCourse } = require('../controllers/matriculaXcursoController');


const router = Router();

router.get('/', getAllRegistrationCourse);

router.get('/:id', getOneRegistrationCourse);

router.put('/:id', updateOneRegistrationCourse);

router.post('/', createNewRegistrationCourse);

router.delete('/:id', deleteOneRegistrationCourse);

module.exports = router;