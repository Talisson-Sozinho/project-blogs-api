const jwt = require('jsonwebtoken');
const models = require('../models');
const { errorObjectConstructor, BAD_REQUEST } = require('../helpers/errorHelper');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const login = async (email, password) => {
  const result = await models.User.findOne({ where: { email, password } });

  if (!result) throw errorObjectConstructor(BAD_REQUEST, 'Invalid fields');

  const { dataValues: user } = result;

  const token = jwt.sign({ userId: user.id }, secret, jwtConfig);

  return { token };
};

module.exports = {
  login,
};