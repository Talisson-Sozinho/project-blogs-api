const services = require('../services');

const newUser = async (req, res) => {
  const { email, password, displayName, image } = req.body;
  const result = await services.registerNewUser(email, password, displayName, image);
  return res.status(201).json(result);
};

const users = async (_req, res) => {
  const result = await services.getAllUsers();
  return res.status(200).json(result);
};

const userById = async (req, res) => {
  const result = await services.getUserById(req.params.id);
  return res.status(200).json(result);
};

module.exports = {
  newUser,
  users,
  userById,
};