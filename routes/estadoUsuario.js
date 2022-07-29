const { Router } = require('express');

const { getAllStatusU,
        getOneStatusU,
        } = require('../controllers/estadoUserController');


const router = Router();

router.get('/', getAllStatusU);

router.get('/:id', getOneStatusU);


module.exports = router;