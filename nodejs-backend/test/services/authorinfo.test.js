const assert = require('assert');
const app = require('../../src/app');

describe('\'authorinfo\' service', () => {
  it('registered the service', () => {
    const service = app.service('authorinfo');

    assert.ok(service, 'Registered the service (authorinfo)');
  });
});
