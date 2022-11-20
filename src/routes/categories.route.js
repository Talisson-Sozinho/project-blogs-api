const express = require('express');
const controllers = require('../controllers');
const categoriesBodyValidate = require('../middlewares/categoriesBodyValidate');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');

const router = express.Router();

router.use(jwtTokenValidate);

router.get('/', controllers.categories);

router.post('/', categoriesBodyValidate, controllers.newCategory);

module.exports = router;