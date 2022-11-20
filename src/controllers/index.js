const { login } = require('./login');
const { newUser, users, userById } = require('./user');
const { newCategory, categories } = require('./categories');

module.exports = {
  login,
  newUser,
  users,
  userById,
  newCategory,
  categories,
};