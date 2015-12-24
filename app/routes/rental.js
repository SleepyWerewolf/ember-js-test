import Ember from 'ember';

export default Ember.Route.extend({
    return this.store.findRecord('rental', params.record_id);
});
