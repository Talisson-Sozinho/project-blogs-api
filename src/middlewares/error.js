const { errorCode } = require('../helpers/errorHelper');

module.exports = (error, _req, res, _next) => {
  const { type, message } = error;

  return res.status(errorCode[type] || 500).json({ message: message || 'internal error' });
};
