const assert = require('assert');
const app = require('../../src/app');

describe('\'author-info\' service', () => {
  it('registered the service', () => {
    const service = app.service('author-info');

    assert.ok(service, 'Registered the service (author-info)');
  });
});
