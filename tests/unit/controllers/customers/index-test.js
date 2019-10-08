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
      company: 'aragorn inc.',
      project: 'test project',
      budget: 2400,
    },{
      firstName: 'gimli',
      lastName: 'son of gloin',
      fullName: 'gimli son of gloin',
      emailAddress: 'test@email.com',
      phoneNumber: '(555) 555-5555',
      company: 'test inc.',
      project: 'gimli fun stuff',
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

  test('sorts by budget ascending', function(assert) {
    let controller = this.owner.lookup('controller:customers/index');
    controller.set('model', this.get('model'));
    controller.set('sortProperty', 'budget');
    var sortedCustomers = controller.sortedCustomers;
    assert.equal(sortedCustomers[0].fullName, 'bilbo baggons');
    assert.equal(sortedCustomers[3].fullName, 'frodo baggons');
  });

  test('sorts by budget descending', function(assert) {
    let controller = this.owner.lookup('controller:customers/index');
    controller.set('model', this.get('model'));
    controller.set('sortProperty', 'budget:desc');
    var sortedCustomers = controller.sortedCustomers;
    assert.equal(sortedCustomers[0].fullName, 'frodo baggons');
    assert.equal(sortedCustomers[3].fullName, 'bilbo baggons');
  });

  test('filter works for first name', function(assert) {
    let controller = this.owner.lookup('controller:customers/index');
    controller.set('model', this.get('model'));
    controller.set('search', 'bilbo');
    var filteredCustomers = controller.get('filteredCustomers');
    assert.equal(filteredCustomers.length, 1);
    assert.equal(filteredCustomers[0].firstName, 'bilbo');
  });

  test('filter works for last name', function(assert) {
    let controller = this.owner.lookup('controller:customers/index');
    controller.set('model', this.get('model'));
    controller.set('search', 'baggons');
    var filteredCustomers = controller.get('filteredCustomers');
    assert.equal(filteredCustomers.length, 2);
    assert.equal(filteredCustomers[0].firstName, 'bilbo');
    assert.equal(filteredCustomers[1].firstName, 'frodo');
  });

  test('filter works for company', function(assert) {
    let controller = this.owner.lookup('controller:customers/index');
    controller.set('model', this.get('model'));
    controller.set('search', 'aragorn inc.');
    var filteredCustomers = controller.get('filteredCustomers');
    assert.equal(filteredCustomers.length, 1);
    assert.equal(filteredCustomers[0].firstName, 'aragorn');
  });

  test('filter works for project', function(assert) {
    let controller = this.owner.lookup('controller:customers/index');
    controller.set('model', this.get('model'));
    controller.set('search', 'gimli fun stuff');
    var filteredCustomers = controller.get('filteredCustomers');
    assert.equal(filteredCustomers.length, 1);
    assert.equal(filteredCustomers[0].firstName, 'gimli');
  });

  test('customerSortProps returns correct property', function(assert) {
    let controller = this.owner.lookup('controller:customers/index');
    assert.equal(controller.get('customersSortProps'), 'fullName');
    controller.set('sortProperty', 'fullName:desc');
    assert.equal(controller.get('customersSortProps'), 'fullName:desc');
  });
});
