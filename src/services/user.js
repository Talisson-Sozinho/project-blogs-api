const jwt = require('jsonwebtoken');
const { errorObjectConstructor, CONFLICT } = require('../helpers/errorHelper');
const { secret, jwtConfig } = require('../helpers/jwtHelper');
const models = require('../models');

const registerNewUser = async (email, password, displayName, image) => {
  const userWithDuplicateEmail = await models.User.findOne({ where: { email } });

  if (userWithDuplicateEmail) throw errorObjectConstructor(CONFLICT, 'User already registered');

  const newUser = await models.User.create({ email, password, displayName, image });

  const token = jwt.sign({ userId: newUser.id }, secret, jwtConfig);

  return { token };
};

module.exports = {
  registerNewUser,
};