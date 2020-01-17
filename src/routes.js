const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchDevController = require('./controllers/SearchDevController');

const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.get('/search', SearchDevController.index);
module.exports = routes;