const { Router } = require('express');

const { getAllCourses,
        getOneCourse,
        createNewCourse,
        updateOneCourse,
        deleteOneCourse } = require('../controllers/cursoController');


const router = Router();

router.get('/', getAllCourses);

router.get('/:id', getOneCourse);

router.put('/:id', updateOneCourse);

router.post('/', createNewCourse);

router.delete('/:id', deleteOneCourse);

module.exports = router;