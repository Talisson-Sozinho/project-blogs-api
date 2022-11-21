const { login } = require('./login');
const { registerNewUser, getAllUsers, getUserById } = require('./user');
const { addNewCategory, getAllCategories } = require('./categories');
const { createNewPost, getAllPosts, getPostById } = require('./post');

module.exports = {
  login,
  registerNewUser,
  getAllUsers,
  getUserById,
  addNewCategory,
  getAllCategories,
  createNewPost,
  getAllPosts,
  getPostById,
};