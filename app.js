const express = require('express');

const app = express();
const port = 3000;
const poiRoute = require('./src/routes/route');

app.use(express.json());

app.use('/', poiRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
