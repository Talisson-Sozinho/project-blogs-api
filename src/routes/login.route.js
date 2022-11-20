const express = require('express');
const loginBodyValidate = require('../middlewares/loginBodyValidate');
const controllers = require('../controllers');

const router = express.Router();

router.use(loginBodyValidate);

router.post('/', controllers.login);

module.exports = router;