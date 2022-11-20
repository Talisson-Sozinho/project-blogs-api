const { errorObjectConstructor, BAD_REQUEST } = require('../helpers/errorHelper');

module.exports = (req, _res, next) => {
  const { name } = req.body;

  if (!name) {
    throw errorObjectConstructor(BAD_REQUEST, '"name" is required');
  }

  return next();
};