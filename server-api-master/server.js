var app = require('express')();
var API = require('json-api');
var mongoose = require('mongoose');
var APIError = API.types.Error;
mongoose.connect('mongodb://localhost/server-api');

var models = {
  Team: require('./models/team').model,
  User: require('./models/user').model
};

var registry_templates = {
  teams: require('./models/team').registry,
  users: require('./models/user').registry
};

var adapter = new API.dbAdapters.Mongoose(models);
var registry = new API.ResourceTypeRegistry(registry_templates, { dbAdapter: adapter });

var docs = new API.controllers.Documentation(registry, { name: 'POC API' });
var controller = new API.controllers.API(registry);
var front = new API.httpStrategies.Express(controller, docs);

var apiReqHandler = front.apiRequest.bind(front);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
  res.header('Access-Control-Allow-Methods',
    'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.options('*', function(req, res) {
  res.send();
});

app.get('/api', front.docsRequest.bind(front));

app.route('/api/:type(users|teams)').get(apiReqHandler).post(apiReqHandler)
  .patch(apiReqHandler);

app.route('/api/:type(users|teams)/:id').get(apiReqHandler).patch(apiReqHandler)
  .delete(apiReqHandler);

app.route('/api/:type(users|teams)/:id/relationships/:relationship')
  .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler)
  .delete(apiReqHandler);

app.use(function(req, res, next) {
  front.sendError(new APIError(404, undefined, 'Not Found'), req, res);
});

app.listen(3000);
