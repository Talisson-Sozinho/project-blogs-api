const { login } = require('./login');
const { registerNewUser, getAllUsers, getUserById } = require('./user');

module.exports = {
  login,
  registerNewUser,
  getAllUsers,
  getUserById,
};