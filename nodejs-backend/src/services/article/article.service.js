const { Article } = require('./article.class');
const createModel = require('../../models/article.model');
const hooks = require('./article.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/article', new Article(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('article');

  service.hooks(hooks);
};