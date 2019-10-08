import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | top-prospects', function(hooks) {
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
    await render(hbs`<TopProspects @model={{this.model}} />`);
    assert.ok(this.element.textContent);
  })
});
