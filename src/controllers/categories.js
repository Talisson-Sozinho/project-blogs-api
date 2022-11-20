const services = require('../services');

const newCategory = async (req, res) => {
  const { name } = req.body;
  const result = await services.addNewCategory(name);
  return res.status(201).json(result);
};

const categories = async (_req, res) => {
  const result = await services.getAllCategories();
  return res.status(200).json(result);
};

module.exports = {
  newCategory,
  categories,
};