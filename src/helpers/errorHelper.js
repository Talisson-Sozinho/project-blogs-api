const BAD_REQUEST = 'BAD_REQUEST';

const errorObjectConstructor = (type, message) => {
  const error = new Error(message);
  error.type = type;
  return error;
};

const errorCode = {
  [BAD_REQUEST]: 400,
};

module.exports = {
  BAD_REQUEST,
  errorObjectConstructor,
  errorCode,
};