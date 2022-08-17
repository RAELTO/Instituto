const { Router } = require('express');

const { getAllEstMatricula } = require('../controllers/estMatriculaController');
const { valJWT } = require('../middlewares');


const router = Router();

router.get('/', valJWT, getAllEstMatricula);

module.exports = router;