const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const { errorObjectConstructor, BAD_REQUEST } = require('../helpers/errorHelper');
const models = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const createNewPost = async (userId, title, content, categoryIds) => {
  const { count } = await models.Category.findAndCountAll({
    where: { id: { [Op.or]: categoryIds } },
    raw: true,
  });

  if (count !== categoryIds.length) { 
    throw errorObjectConstructor(BAD_REQUEST, 'one or more "categoryIds" not found'); 
  }

  const t = await sequelize.transaction();

  const { dataValues: blogPost } = await models.BlogPost
    .create({ userId, title, content }, { transaction: t });

  await models.PostCategory.bulkCreate(categoryIds.map((id) => (
    { categoryId: id, postId: blogPost.id })), { transaction: t });

  await t.commit();
  return blogPost;
};

module.exports = {
  createNewPost,
};