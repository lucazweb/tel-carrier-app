const data = require('./numbers.mock.json');

module.exports = (app) => {
  app.get('/numbers', (req, res) => {
    res.json(data);
  });

  app.get('/number/:id', (req, res) => {
    const { id } = req.params;
    const [query] = data.filter((number) => number.id === parseInt(id));

    if (!query) {
      res.status(404).send();
    }
    res.status(200).json(query);
  });

  return app;
};
