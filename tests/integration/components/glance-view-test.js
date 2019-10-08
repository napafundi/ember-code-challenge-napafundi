import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | glance-view', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('model', [
      {
      firstName: 'test-first',
      lastName: 'test-last',
      emailAddress: 'test@email.com',
      phoneNumber: '(555) 555-5555',
      company: 'test inc.',
      project: 'test project',
      budget: 500,
      },
      {
      firstName: 'test-2',
      lastName: 'test-last-2',
      emailAddress: 'test@email.com',
      phoneNumber: '(555) 555-5555',
      company: 'test inc.',
      project: 'retired',
      budget: 64500,
      }
    ]);
  });

  test('it renders', async function(assert) {
    await render(hbs`<GlanceView @model={{this.model}} />`);
    assert.ok(this.element.textContent);
  });

  test('it displays number of customers', async function(assert) {
    await render(hbs`<GlanceView @model={{this.model}} />`);
    assert.equal(
      document.getElementById('numOfCustomers').textContent.trim(),
      '2');
  });

  test('it displays total budget', async function(assert) {
    await render(hbs`<GlanceView @model={{this.model}} />`);
    assert.equal(
      document.getElementById('totalBudget').textContent.trim(),
      '$0.065M');
  });

  test('it displays employed customers', async function(assert) {
    await render(hbs`<GlanceView @model={{this.model}} />`);
    assert.equal(
      document.getElementById('employedCustomers').textContent.trim(),
      '1');
  });

  test('it displays average budget', async function(assert) {
    await render(hbs`<GlanceView @model={{this.model}} />`);
    assert.equal(
      document.getElementById('averageBudget').textContent.trim(),
      '$0.033M');
  });

  test('it renders customers with zero budget', async function(assert) {
    await render(hbs`<GlanceView @model={{this.model}} />`);
    assert.equal(
      document.getElementById('zeroBudget').textContent.trim(),
      '0');
  });

  test('it renders % of customers below average budget', async function(assert){
    await render(hbs`<GlanceView @model={{this.model}} />`);
    assert.equal(
      document.getElementById('pctBelowAvg').textContent.trim(),
      '50.00%');
  });

  test('more button displays info upon clicking and changes text', async function(assert) {
    await render(hbs`<GlanceView @model={{this.model}} />`);
    assert.notEqual(document.querySelector("div.collapse"), null);
    await click('#collapseButton'); // Show more content
    assert.equal(document.querySelector("div.collapse"), null);
    assert.equal(
      document.getElementById('collapseButton').textContent.trim(),
      'Less');
    await click('#collapseButton'); // Re-collapse content
    assert.notEqual(document.querySelector("div.collapse"), null);
    assert.equal(
      document.getElementById('collapseButton').textContent.trim(),
      'More');
  });
});
