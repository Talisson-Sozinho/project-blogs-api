const { errorObjectConstructor, BAD_REQUEST } = require('../helpers/errorHelper');

module.exports = (req, _res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw errorObjectConstructor(BAD_REQUEST, 'Some required fields are missing');
  }

  return next();
};