const { login } = require('./login');
const { newUser, users, userById } = require('./user');

module.exports = {
  login,
  newUser,
  users,
  userById,
};