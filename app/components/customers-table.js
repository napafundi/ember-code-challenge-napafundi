import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, observer } from '@ember/object';
import Table from 'ember-light-table';

export default Component.extend({
  router: service(),
  classNames: ['customers-table', 'table-responsive'],
  model: null,
  table: null,

  columns: computed(function() {
    return [
      {
        label: 'First Name',
        valuePath: 'firstName',
        sortable: false,
        classNames: ['first-name-col']
      },
      {
        label: 'Last Name',
        valuePath: 'lastName',
        sortable: false,
        classNames: ['last-name-col']
      },
      {
        label: 'Email',
        valuePath: 'emailAddress',
        width: '200px',
        sortable: false,
        classNames: ['email-col'],
        breakpoints: ['tablet', 'desktop', 'jumbo']
      },
      {
        label: 'Phone Number',
        valuePath: 'phoneNumber',
        width: '150px',
        sortable: false,
        classNames: ['phone-col'],
        breakpoints: ['tablet', 'desktop', 'jumbo']
      },
      {
        label: 'Company',
        valuePath: 'company',
        sortable: false,
        classNames: ['company-col'],
        breakpoints: ['tablet', 'desktop', 'jumbo']
      },
      {
        label: 'Project',
        valuePath: 'project',
        sortable: false,
        classNames: ['project-col'],
        breakpoints: ['tablet', 'desktop', 'jumbo']
      },
      {
        label: 'Budget',
        valuePath: 'budget',
        sortable: false,
        classNames: ['budget-col'],
        breakpoints: ['tablet', 'desktop', 'jumbo']
      }
    ]
  }),

  // eslint-disable-next-line ember/no-observers
  onModelChange: observer('model', function() {
    if(this.table) {
      this.table.setRowsSynced(this.model);
    }
  }),

  init() {
    this._super(...arguments);
    let table = new Table(this.columns, this.model, {enableSync: true});
    this.set('table', table);
  },

  actions: {
    onRowClick(row) {
      this.router.transitionTo('customers.customer', row.get('id'));
    }
  }
});
