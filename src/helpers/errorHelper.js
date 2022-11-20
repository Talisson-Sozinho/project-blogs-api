const BAD_REQUEST = 'BAD_REQUEST';
const CONFLICT = 'CONFLICT';
const UNAUTHORIZED = 'UNAUTHORIZED';

const errorObjectConstructor = (type, message) => {
  const error = new Error(message);
  error.type = type;
  return error;
};

const errorCode = {
  [BAD_REQUEST]: 400,
  [UNAUTHORIZED]: 401,
  [CONFLICT]: 409,
};

module.exports = {
  BAD_REQUEST,
  CONFLICT,
  UNAUTHORIZED,
  errorObjectConstructor,
  errorCode,
};