const { login } = require('./login');
const { registerNewUser, getAllUsers, getUserById, deleteUserById } = require('./user');
const { addNewCategory, getAllCategories } = require('./categories');
const { 
  createNewPost, 
  getAllPosts, 
  getPostById, 
  userHasPermission,
  updatePostById, 
  deletePostById, 
} = require('./post');

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
  userHasPermission,
  updatePostById,
  deletePostById,
  deleteUserById,
};