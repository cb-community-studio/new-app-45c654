const { Author-info } = require('./author-info.class');
const createModel = require('../../models/author-info.model');
const hooks = require('./author-info.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/author-info', new Author-info(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('author-info');

  service.hooks(hooks);
};