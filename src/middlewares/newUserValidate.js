const { errorObjectConstructor, BAD_REQUEST } = require('../helpers/errorHelper');
const { isValidEmail } = require('../helpers/emailValidate ');

module.exports = (req, _res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    throw errorObjectConstructor(BAD_REQUEST, 
      '"displayName" length must be at least 8 characters long');
  }

  if (password.length < 6) {
    throw errorObjectConstructor(BAD_REQUEST, 
      '"password" length must be at least 6 characters long');
  }

  if (!isValidEmail(email)) {
    throw errorObjectConstructor(BAD_REQUEST, '"email" must be a valid email');
  }

  return next();
};