const express = require('express');
const app = express();
const consign = require('consign');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(
  cors({
    exposedHeaders: ['X-Total-Count'],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign({ cwd: 'app' }).include('routes').into(app);

module.exports = () => app;
