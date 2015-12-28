import Ember from 'ember';

export default Ember.Component.extend({
    isImageShowing: false,
    isEditMode: false,
    actions: {
        toggleImage() {
            if (this.isImageShowing) {
                this.set('isImageShowing', false);
            } else {
                this.set('isImageShowing', true);
            }
        },
        toggleEditMode() {
            if (this.isEditMode) {
                this.set('isEditMode', false);
            } else {
                this.set('isEditMode', true);
            }
        },
        updateRental() {
            this.rental.set('bedrooms', parseInt(JSON.parse(JSON.stringify(this.rental)).bedrooms));
            this.sendAction('updateRental', this.rental);
        }
    }
});
