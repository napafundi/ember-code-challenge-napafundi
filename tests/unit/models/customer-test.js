import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | customer', function(hooks) {
  setupTest(hooks);

  test('should correctly concat first name and last name', async function(assert) {
    const customer = this.owner.lookup('service:store').createRecord('customer');
    customer.set('firstName', 'test-first');
    customer.set('lastName', 'test-last');
    assert.equal(customer.get('fullName'), 'test-first test-last');
  });

  test('should return formatted budget', function(assert) {
    const customer = this.owner.lookup('service:store').createRecord('customer');
    customer.set('budget', 500000.32);
    assert.equal(customer.get('budgetFormatted'), '$500,000');
  });
});
