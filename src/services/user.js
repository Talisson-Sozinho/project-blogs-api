const jwt = require('jsonwebtoken');
const { errorObjectConstructor, CONFLICT, NOT_FOUND } = require('../helpers/errorHelper');
const { secret, jwtConfig } = require('../helpers/jwtHelper');
const models = require('../models');

const registerNewUser = async (email, password, displayName, image) => {
  const userWithDuplicateEmail = await models.User.findOne({ where: { email } });

  if (userWithDuplicateEmail) throw errorObjectConstructor(CONFLICT, 'User already registered');

  const newUser = await models.User.create({ email, password, displayName, image });

  const token = jwt.sign({ userId: newUser.id }, secret, jwtConfig);

  return { token };
};

const getAllUsers = async () => {
  const users = await models.User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserById = async (id) => {
  const user = await models.User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  if (!user) throw errorObjectConstructor(NOT_FOUND, 'User does not exist');

  return user;
};

module.exports = {
  registerNewUser,
  getAllUsers,
  getUserById,
};