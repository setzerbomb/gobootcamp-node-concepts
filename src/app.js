const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

const message = (res, status = 400, message = 'Resource Not found') =>
  res.status(status).json({ message });

const validateRepositoryId = (req, res, next) => {
  const { id } = req.params;

  if (!isUuid(id)) {
    return message(res, 400, 'Invalid repository ID');
  }
  next();
};

app.use('/repositories/:id', validateRepositoryId);

app.get('/repositories', (request, response) => {
  return response.json(repositories);
});

app.post('/repositories', (request, response) => {
  const { url, title, techs } = request.body;

  const repository = { id: uuid(), url, title, techs, likes: 0 };

  repositories.push(repository);

  return response.json(repository);
});

app.get('/repositories/:id', (request, response) => {
  const { id } = request.params;

  const repository = repositories.find((repository) => repository.id === id);

  return repository ? response.json(repository) : message(response);
});

app.put('/repositories/:id', (request, response) => {
  const { id } = request.params;

  const { url, title, techs } = request.body;

  const repository = repositories.find((repository) => repository.id === id);

  if (!repository) {
    return message(response);
  }

  repository.url = url || repository.url;
  repository.title = title || repository.title;
  repository.techs = techs || repository.techs;

  return response.json(repository);
});

app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(
    (project) => project.id === id
  );

  if (repositoryIndex < 0) {
    return message(res);
  }

  repositories.splice(repositoryIndex, 1);

  return message(response, 204, '');
});

app.post('/repositories/:id/like', (request, response) => {
  const { id } = request.params;

  const repository = repositories.find((repository) => repository.id === id);

  if (!repository) {
    return message(response);
  }

  repository.likes += 1;

  return response.json({ likes: repository.likes });
});

module.exports = app;
