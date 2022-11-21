const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const { errorObjectConstructor, BAD_REQUEST, NOT_FOUND } = require('../helpers/errorHelper');
const models = require('../models');
const { User, Category } = require('../models');
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

const getAllPosts = async () => {
  const posts = await models.BlogPost.findAll({
    include: [
      { 
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category, as: 'categories', through: { attributes: [] },
      },
    ],
    
  });
  return posts;
};

const getPostById = async (id) => {
  const post = await models.BlogPost.findByPk(id, {
    include: [
      { 
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category, as: 'categories', through: { attributes: [] },
      },
    ],
    
  });

  if (!post) throw errorObjectConstructor(NOT_FOUND, 'Post does not exist');

  return post;
};

module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
};