const services = require('../services');

const newPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const result = await services.createNewPost(req.userId, title, content, categoryIds);

  return res.status(201).json(result);
};

module.exports = {
  newPost,
};