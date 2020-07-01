const data = require('./numbers.mock.json');
const pagination = require('../../lib/pagination');

module.exports = (app) => {
  app.get('/numbers', (req, res) => {
    const { page, limit } = req.query;
    const totalPages = data.length / limit;
    res.header('X-Total-Count', totalPages);
    res.json(pagination(data, limit, page));
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
