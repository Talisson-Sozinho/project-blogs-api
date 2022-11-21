const { errorObjectConstructor, BAD_REQUEST } = require('../helpers/errorHelper');

module.exports = (req, _res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    throw errorObjectConstructor(BAD_REQUEST, 'Some required fields are missing');
  }

  return next();
};