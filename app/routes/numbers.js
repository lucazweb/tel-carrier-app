const data = require('./numbers.mock.json');

module.exports = (app) => {
  app.get('/numbers', (req, res) => {
    res.json(data);
  });

  app.get('/number/:id', (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const [query] = data.filter((number) => number.id === parseInt(id));
    res.json(query);
  });

  // save numbers

  // update numbers

  // delete numbers

  return app;
};
