const express = require('express');

const app = express();
const port = 4000;

const todos = [
  {
    id: 1, description: 'Write some code', done: false, critical: false,
  },
  {
    id: 2, description: 'Change the world', done: false, critical: false,
  },
  {
    id: 3, description: 'Eat a cookie', done: false, critical: false,
  },
];

app.use(express.json());

app.get('/api/todos', (req, res) => res.json({ todos }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
