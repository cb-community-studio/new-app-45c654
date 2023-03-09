const assert = require('assert');
const app = require('../../src/app');

describe('\'userinfo\' service', () => {
  it('registered the service', () => {
    const service = app.service('userinfo');

    assert.ok(service, 'Registered the service (userinfo)');
  });
});
