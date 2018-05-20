const express = require('express'),
      { port, uses } = require('./config'),
      R = require('rambda');

const api = require('./routes/api');

const app = express();

app.use('/', express.static(__dirname + '/dist'));

R.map(v => app.use(v), uses);

app.use(api);

app.listen(port, () => console.log(`Example app listening on port ${ port }!`));