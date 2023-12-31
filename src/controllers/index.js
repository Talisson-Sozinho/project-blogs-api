const { login } = require('./login');
const { newUser, users, userById, deleteMyself } = require('./user');
const { newCategory, categories } = require('./categories');
const { newPost, posts, postById, postUpdate, postDelete, postSearch } = require('./post');

module.exports = {
  login,
  newUser,
  users,
  userById,
  newCategory,
  categories,
  newPost,
  posts,
  postById,
  postUpdate,
  postDelete,
  deleteMyself,
  postSearch,
};