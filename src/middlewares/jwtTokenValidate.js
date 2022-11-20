const jwt = require('jsonwebtoken');
const { errorObjectConstructor, UNAUTHORIZED } = require('../helpers/errorHelper');
const { secret } = require('../helpers/jwtHelper');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw errorObjectConstructor(UNAUTHORIZED, 'Token not found');

  try {
    jwt.verify(authorization, secret);
  } catch (err) {
    throw errorObjectConstructor(UNAUTHORIZED, 'Expired or invalid token');
  }
  next();
};
