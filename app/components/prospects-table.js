import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, observer } from '@ember/object';
import Table from 'ember-light-table';
import { sort } from '@ember/object/computed';

export default Component.extend({
    router: service(),
    classNames: ['prospects-table', 'table-responsive'],
    model: null,
    table: null,

    sortProperty: 'budget:desc',
    customerSortProps: computed('sortProperty', function() {
        return [this.sortProperty];
    }),
    sortedProspects: sort('model', 'customerSortProps'),
    topProspects: computed('model', 'sortedProspects', function() {
        var sortedProspects = this.get('sortedProspects');
        return sortedProspects.slice(0, 5);
    }),

    columns: computed(function() {
        return [
            {
                label: 'Name',
                valuePath: 'fullName',
                sortable: false,
            },
            {
                label: 'Company',
                valuePath: 'company',
                sortable: false,
            },
            {
                label: 'Budget',
                valuePath: 'budgetFormatted',
                sortable: false,
            }
        ]
    }),

    // eslint-disable-next-line ember/no-observers
    onModelChange: observer('model', function() {
        this.table.setRowsSynced(this.model);
    }),

    init() {
        this._super(...arguments);
        let table = new Table(this.columns, this.topProspects, {enableSync: true});
        this.set('table', table);
    },

    actions: {
        onRowClick(row) {
            this.router.transitionTo('customers.customer', row.get('id'));
        }
    }
});
