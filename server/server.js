const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Agnes',
    age: 18
  }, {
    name: 'Simon',
    age: 35
  }, {
    name: 'Bob',
    age: 0
  }]);
});

app.listen(3000);
module.exports.app = app;
