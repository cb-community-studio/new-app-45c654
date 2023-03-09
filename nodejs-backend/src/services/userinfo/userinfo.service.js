const { Userinfo } = require('./userinfo.class');
const createModel = require('../../models/userinfo.model');
const hooks = require('./userinfo.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/userinfo', new Userinfo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('userinfo');

  service.hooks(hooks);
};