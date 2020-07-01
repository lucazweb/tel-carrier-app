const data = require('./numbers.mock.json');
const pagination = require('../../lib/pagination');

module.exports = (app) => {
  app.get('/numbers', (req, res) => {
    const { page, limit } = req.query;
    const totalPages = data.length / limit;

    // simulates api delay

    setTimeout(() => {
      res.header('X-Total-Count', totalPages);
      res.json(pagination(data, limit, page));
    }, 2000);
  });

  app.get('/number/:id', (req, res) => {
    const { id } = req.params;
    const [query] = data.filter((number) => number.id === parseInt(id));

    if (!query) {
      res.status(404).send();
    }
    setTimeout(() => res.status(200).json(query), 2000);
  });

  return app;
};
