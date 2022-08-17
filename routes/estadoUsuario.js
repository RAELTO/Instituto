const { Router } = require('express');

const { getAllStatusU,
        getOneStatusU,
        } = require('../controllers/estadoUserController');
const { valJWT } = require('../middlewares');


const router = Router();

router.get('/', valJWT, getAllStatusU);

router.get('/:id', valJWT, getOneStatusU);


module.exports = router;