const express = require('express');
const newUserValidate = require('../middlewares/newUserValidate');
const controllers = require('../controllers');

const router = express.Router();

router.post('/', newUserValidate, controllers.newUser);

module.exports = router;