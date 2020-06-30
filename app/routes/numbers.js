const data = require('./numbers.mock.json');
module.exports = (app) => {
  app.get('/numbers', (req, res) => {
    res.json(data);
  });

  return app;
};
