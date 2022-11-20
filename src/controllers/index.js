const { login } = require('./login');
const { newUser, users, userById } = require('./user');
const { newCategory } = require('./categories');

module.exports = {
  login,
  newUser,
  users,
  userById,
  newCategory,
};