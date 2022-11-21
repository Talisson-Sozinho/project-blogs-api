const express = require('express');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');
const controllers = require('../controllers');
const newPostValidate = require('../middlewares/newPostValidate');

const router = express.Router();

router.use(jwtTokenValidate);

router.post('/', newPostValidate, controllers.newPost);

router.get('/', controllers.posts);

module.exports = router;