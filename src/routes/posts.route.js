const express = require('express');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');
const controllers = require('../controllers');
const newPostValidate = require('../middlewares/newPostValidate');

const router = express.Router();

router.post('/', jwtTokenValidate, newPostValidate, controllers.newPost);

module.exports = router;