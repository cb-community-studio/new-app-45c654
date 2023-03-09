const { Authorinfo } = require('./authorinfo.class');
const createModel = require('../../models/authorinfo.model');
const hooks = require('./authorinfo.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/authorinfo', new Authorinfo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('authorinfo');

  service.hooks(hooks);
};