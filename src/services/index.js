const { login } = require('./login');
const { registerNewUser, getAllUsers, getUserById } = require('./user');
const { addNewCategory } = require('./categories');

module.exports = {
  login,
  registerNewUser,
  getAllUsers,
  getUserById,
  addNewCategory,
};