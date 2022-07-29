const { Router } = require('express');

const { getAllTDocument,
        getOneTDocument,
        } = require('../controllers/tDocumentoController');


const router = Router();

router.get('/', getAllTDocument);

router.get('/:id', getOneTDocument);


module.exports = router;