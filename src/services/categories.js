const models = require('../models');

const addNewCategory = (name) => models.Category.create({ name });

const getAllCategories = () => models.Category.findAll();

module.exports = {
  addNewCategory,
  getAllCategories,
};