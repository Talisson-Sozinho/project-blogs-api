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

  await services.userHasPermission(id, req.userId);

  const result = await services.updatePostById(id, title, content);

  return res.status(200).json(result);
};

const postDelete = async (req, res) => {
  const { id } = req.params;

  await services.userHasPermission(id, req.userId);

  await services.deletePostById(id);

  return res.sendStatus(204);
};

const postSearch = async (req, res) => {
  const { query: { q } } = req;
  
  const result = await services.searchTermPost(q);

  return res.status(200).json(result);
};

module.exports = {
  newPost,
  posts,
  postById,
  postUpdate,
  postDelete,
  postSearch,
};