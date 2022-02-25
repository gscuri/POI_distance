const express = require('express');

const app = express();
const poiRoute = require('../routes/route');

app.use(express.json());

app.use('/', poiRoute);

module.exports = { app };
