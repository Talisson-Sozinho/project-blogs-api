const { errorObjectConstructor, BAD_REQUEST } = require('../helpers/errorHelper');

module.exports = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds || !categoryIds.length) {
    throw errorObjectConstructor(BAD_REQUEST, 'Some required fields are missing');
  }

  return next();
};