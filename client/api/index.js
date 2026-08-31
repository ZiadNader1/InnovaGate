const authHandler = require('./auth');
const submissionsHandler = require('./submissions');

module.exports = async (req, res) => {
  const url = req.url || '';
  if (url.includes('/auth')) {
    return authHandler(req, res);
  }
  return submissionsHandler(req, res);
};
