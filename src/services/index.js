const { login } = require('./login');
const { registerNewUser, getAllUsers } = require('./user');

module.exports = {
  login,
  registerNewUser,
  getAllUsers,
};