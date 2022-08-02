const { Router } = require('express');
const { check } = require('express-validator');

const { valFields } = require('../middlewares/val-fields');

const { login } = require('../controllers/auth');

const router = Router();

router.post('/login', [
    check('correo', 'El correo es obligatorio').isEmail(),
    check('contrasena', 'La contraseña es obligatoria').not().isEmpty(),
    valFields
],login);


module.exports = router;