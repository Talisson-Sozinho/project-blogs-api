const services = require('../services');

const newPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const result = await services.createNewPost(req.userId, title, content, categoryIds);

  return res.status(201).json(result);
};

const posts = async (_req, res) => {
  const result = await services.getAllPosts();

  return res.status(200).json(result);
};

const postById = async (req, res) => {
  const { id } = req.params;
  const result = await services.getPostById(id);

  return res.status(200).json(result);
};

const postUpdate = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const result = await services.updatePostById(id, title, content, req.userId);

  return res.status(200).json(result);
};

module.exports = {
  newPost,
  posts,
  postById,
  postUpdate,
};