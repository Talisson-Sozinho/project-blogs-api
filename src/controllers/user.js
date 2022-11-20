const services = require('../services');

const newUser = async (req, res) => {
  const { email, password, displayName, image } = req.body;
  const result = await services.registerNewUser(email, password, displayName, image);
  return res.status(201).json(result);
};

module.exports = {
  newUser,
};