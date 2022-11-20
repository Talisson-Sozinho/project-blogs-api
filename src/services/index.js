const { login } = require('./login');
const { registerNewUser, getAllUsers, getUserById } = require('./user');
const { addNewCategory, getAllCategories } = require('./categories');

module.exports = {
  login,
  registerNewUser,
  getAllUsers,
  getUserById,
  addNewCategory,
  getAllCategories,
};