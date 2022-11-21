const express = require('express');
const newUserValidate = require('../middlewares/newUserValidate');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');
const controllers = require('../controllers');

const router = express.Router();

router.post('/', newUserValidate, controllers.newUser);

router.use(jwtTokenValidate);

router.get('/', controllers.users);

router.get('/:id', controllers.userById);

router.delete('/me', controllers.deleteMyself);

module.exports = router;