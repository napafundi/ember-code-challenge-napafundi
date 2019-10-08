import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    totalBudget: computed('model', function() {
        const model = this.get('model');
        var sum = 0;
        model.forEach(function(item) {
            sum += item.get('budget');
        });
        return (sum / 1000000).toFixed(3);
    }),

    averageBudget: computed('model', 'totalBudget', function() {
        const totalBudget = this.get('totalBudget');
        const totalCustomers = this.get('model').length;
        return (totalBudget / totalCustomers).toFixed(3);
    }),

    employedCustomersCount: computed('model', 'model.@each.project', function() {
        return this.model.filter(function(item) {
            return item.project.toLowerCase().indexOf('retire') === -1;
        }).length
    })
});
