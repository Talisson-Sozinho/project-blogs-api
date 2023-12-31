const express = require('express');
const loginBodyValidate = require('../middlewares/loginBodyValidate');
const controllers = require('../controllers');

const router = express.Router();

router.post('/', loginBodyValidate, controllers.login);

module.exports = router;