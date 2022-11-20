const express = require('express');
const newUserValidate = require('../middlewares/newUserValidate');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');
const controllers = require('../controllers');

const router = express.Router();

router.post('/', newUserValidate, controllers.newUser);

router.get('/', jwtTokenValidate, controllers.users);

module.exports = router;