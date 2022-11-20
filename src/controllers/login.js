const services = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await services.login(email, password);
  return res.status(200).json(result);
};

module.exports = {
  login,
};