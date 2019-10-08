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
    }),

    nonExistentBudgetCount: computed('model', 'model.@each.budget', function() {
        return this.model.filter(function(item) {
            return item.budget <= 0;
        }).length;
    }),

    customersBelowAverageBudget: computed('model','model.@each.budget', 'averageBudget', function(){
        const averageBudget = this.get('averageBudget');
        return (this.model.filter(function(item) {
            return (item.budget / 1000000).toFixed(3) < averageBudget;
        }).length / this.model.length).toFixed(2);
    }),

    isCollapsed: true,

    actions: {
        toggleCollapsedInfo() {
            const btn = document.getElementById('collapseButton');
            if (btn.textContent.trim() === 'More') {
                btn.textContent = 'Less';
                this.set('isCollapsed', false);
            } else {
                btn.textContent = 'More';
                this.set('isCollapsed', true);
            }   
        }
    }
});
