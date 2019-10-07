import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort} from '@ember/object/computed';

export default Controller.extend({
  sortProperty: 'fullName',
  sortPropertyDesc: 'fullName:desc',
  sortPropertyBudgetDesc: 'budget:desc',
  sortPropertyBudget: 'budget',

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
        return item.get('fullName').toLowerCase().indexOf(search) !== -1 ||
               item.get('company').toLowerCase().indexOf(search) !== -1 ||
               item.get('project').toLowerCase().indexOf(search) !== -1;
      })
    }
  }).observes('searchTerm'),
});
