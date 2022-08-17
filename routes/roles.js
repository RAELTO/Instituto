const { Router } = require('express');

const { getAllRoles } = require('../controllers/roleController');
const { valJWT } = require('../middlewares');


const router = Router();

router.get('/', valJWT, getAllRoles);

module.exports = router;