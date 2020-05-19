const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

const validateProjectId = (req, res, next) => {
  const { id } = req.params;

  if (!isUuid(id)) {
    return message(res, 400, 'Invalid project ID');
  }
  next();
};

app.use('/repositories/:id', validateProjectId);

app.get('/repositories', (request, response) => {
  // TODO
});

app.post('/repositories', (request, response) => {
  // TODO
});

app.put('/repositories/:id', (request, response) => {
  // TODO
});

app.delete('/repositories/:id', (request, response) => {
  // TODO
});

app.post('/repositories/:id/like', (request, response) => {
  // TODO
});

module.exports = app;
