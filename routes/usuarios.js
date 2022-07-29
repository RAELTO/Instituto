const { Router } = require('express');

const { getAllUsers,
        getOneUser,
        createNewUser,
        updateOneUser,
        deleteOneUser } = require('../controllers/usuarioController');


const router = Router();

router.get('/', getAllUsers);

router.get('/:id', getOneUser);

router.put('/:id', updateOneUser);

router.post('/', createNewUser);

router.delete('/:id', deleteOneUser);

module.exports = router;