const express = require('express');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');
const controllers = require('../controllers');
const newPostValidate = require('../middlewares/newPostValidate');
const updatePostValidate = require('../middlewares/updatePostValidate');

const router = express.Router();

router.use(jwtTokenValidate);

router.post('/', newPostValidate, controllers.newPost);

router.get('/', controllers.posts);

router.get('/:id', controllers.postById);

router.put('/:id', updatePostValidate, controllers.postUpdate);

module.exports = router;