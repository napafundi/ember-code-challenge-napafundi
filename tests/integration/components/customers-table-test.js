import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | customers-table', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('model', [{
      firstName: 'test-first',
      lastName: 'test-last',
      emailAddress: 'test@email.com',
      phoneNumber: '(555) 555-5555',
      company: 'test inc.',
      project: 'test project',
      budget: 500,
    }]);
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<CustomersTable @model={{this.model}} />`);
    assert.ok(this.element.textContent);
  });

  test('should display first name column', async function(assert) {
    await render(hbs`<CustomersTable @model={{this.model}} />`);
    assert.equal(this.element.querySelector('tr th.first-name-col').textContent.trim(), 'First Name');
  });

  test('should display last name column', async function(assert) {
    await render(hbs`<CustomersTable @model={{this.model}} />`);
    assert.equal(this.element.querySelector('tr th.last-name-col').textContent.trim(), 'Last Name');
  });

  test('should display email column', async function(assert) {
    await render(hbs`<CustomersTable @model={{this.model}} />`);
    assert.equal(this.element.querySelector('tr th.email-col').textContent.trim(), 'Email');
  });

  test('should display phone number column', async function(assert) {
    await render(hbs`<CustomersTable @model={{this.model}} />`);
    assert.equal(this.element.querySelector('tr th.phone-col').textContent.trim(), 'Phone Number');
  });

  test('should display company column', async function(assert) {
    await render(hbs`<CustomersTable @model={{this.model}} />`);
    assert.equal(this.element.querySelector('tr th.company-col').textContent.trim(), 'Company');
  });

  test('should display project column', async function(assert) {
    await render(hbs`<CustomersTable @model={{this.model}} />`);
    assert.equal(this.element.querySelector('tr th.project-col').textContent.trim(), 'Project');
  });

  test('should display budget column', async function(assert) {
    await render(hbs`<CustomersTable @model={{this.model}} />`);
    assert.equal(this.element.querySelector('tr th.budget-col').textContent.trim(), 'Budget');
  });
});
