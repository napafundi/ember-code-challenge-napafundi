import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  sortProperty: 'fullName',

  customersSortProps: computed('sortProperty', function() {
    return [this.sortProperty];
  }),

  sortedCustomers: sort('model', 'customersSortProps'),
  queryParams: ['search'],
  search: '',
  filteredCustomers: computed('sortedCustomers', 'search', function() {
    var search = this.get('search').toLowerCase();
    if (!search) {
      return this.sortedCustomers;
    } else {
      return this.sortedCustomers.filter(function(item) {
        return item.fullName.toLowerCase().indexOf(search) !== -1 ||
               item.company.toLowerCase().indexOf(search) !== -1 ||
               item.project.toLowerCase().indexOf(search) !== -1;
      });
    }
  }),
});
