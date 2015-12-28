import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createRental(params) {
            var rental = {
                title: this.title,
                owner: this.owner,
                city: this.city,
                type: this.type,
                image: this.image,
                bedrooms: parseInt(this.bedrooms)
            };
            this.sendAction('createRental', rental);
        }
    }
});
