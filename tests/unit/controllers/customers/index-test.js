import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | customers/index', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.set('model', [{
      firstName: 'frodo',
      lastName: 'baggons',
      fullName: 'frodo baggons',
      emailAddress: 'test@email.com',
      phoneNumber: '(555) 555-5555',
      company: 'test inc.',
      project: 'test project',
      budget: 6000,
    },{
      firstName: 'bilbo',
      lastName: 'baggons',
      fullName: 'bilbo baggons',
      emailAddress: 'test@email.com',
      phoneNumber: '(555) 555-5555',
      company: 'test inc.',
      project: 'test project',
      budget: 500,
    },{
      firstName: 'aragorn',
      lastName: 'telcontar',
      fullName: 'aragorn telcontar',
      emailAddress: 'test@email.com',
      phoneNumber: '(555) 555-5555',
      company: 'test inc.',
      project: 'test project',
      budget: 2400,
    },{
      firstName: 'gimli',
      lastName: 'son of gloin',
      fullName: 'gimli son of gloin',
      emailAddress: 'test@email.com',
      phoneNumber: '(555) 555-5555',
      company: 'test inc.',
      project: 'test project',
      budget: 3200,
    }
  ]);
  });

  test('sorts by full name ascending', function(assert) {
    let controller = this.owner.lookup('controller:customers/index');
    controller.set('model', this.get('model'));
    controller.set('sortProperty', 'fullName');
    var sortedCustomers = controller.sortedCustomers;
    assert.equal(sortedCustomers[0].fullName, 'aragorn telcontar');
    assert.equal(sortedCustomers[3].fullName, 'gimli son of gloin');
  });

  test('sorts by full name descending', function(assert) {
    let controller = this.owner.lookup('controller:customers/index');
    controller.set('model', this.get('model'));
    controller.set('sortProperty', 'fullName:desc');
    var sortedCustomers = controller.sortedCustomers;
    assert.equal(sortedCustomers[0].fullName, 'gimli son of gloin');
    assert.equal(sortedCustomers[3].fullName, 'aragorn telcontar');
  });

  test('sorts by budget descending', function(assert) {
    let controller = this.owner.lookup('controller:customers/index');
    controller.set('model', this.get('model'));
    controller.set('sortProperty', 'budget:desc');
    var sortedCustomers = controller.sortedCustomers;
    assert.equal(sortedCustomers[0].fullName, 'frodo baggons');
    assert.equal(sortedCustomers[3].fullName, 'bilbo baggons');
  });
});
