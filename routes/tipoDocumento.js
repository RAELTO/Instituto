const { Router } = require('express');

const { getAllTDocument,
        getOneTDocument,
        } = require('../controllers/tDocumentoController');
const { valJWT } = require('../middlewares');


const router = Router();

router.get('/', valJWT, getAllTDocument);

router.get('/:id', valJWT, getOneTDocument);


module.exports = router;