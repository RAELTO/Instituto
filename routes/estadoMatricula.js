const { Router } = require('express');

const { getAllEstMatricula } = require('../controllers/estMatriculaController');


const router = Router();

router.get('/', getAllEstMatricula);

module.exports = router;