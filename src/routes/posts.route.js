const express = require('express');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');
const controllers = require('../controllers');
const newPostValidate = require('../middlewares/newPostValidate');
const updatePostValidate = require('../middlewares/updatePostValidate');

const router = express.Router();

router.use(jwtTokenValidate);

router.post('/', newPostValidate, controllers.newPost);

router.get('/search', controllers.postSearch);

router.get('/', controllers.posts);

router.get('/:id', controllers.postById);

router.put('/:id', updatePostValidate, controllers.postUpdate);

router.delete('/:id', controllers.postDelete);

module.exports = router;