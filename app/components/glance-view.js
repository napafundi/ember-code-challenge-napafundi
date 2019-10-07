import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    totalBudget: computed('model', function() {
        const model = this.get('model');
        var sum = 0;
        model.forEach(function(item) {
            sum += item.get('budget');
        });
        return (sum / 1000000).toFixed(2);
    })
});
