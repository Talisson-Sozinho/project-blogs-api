const BAD_REQUEST = 'BAD_REQUEST';
const CONFLICT = 'CONFLICT';

const errorObjectConstructor = (type, message) => {
  const error = new Error(message);
  error.type = type;
  return error;
};

const errorCode = {
  [BAD_REQUEST]: 400,
  [CONFLICT]: 409,
};

module.exports = {
  BAD_REQUEST,
  CONFLICT,
  errorObjectConstructor,
  errorCode,
};