const models = require('../models');

const addNewCategory = (name) => {
  const newCategory = models.Category.create({ name });
  return newCategory;
};

module.exports = {
  addNewCategory,
};