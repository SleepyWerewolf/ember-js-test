import Ember from 'ember';

var toggleSuccessMessage = function() {
    $('.successMessage').fadeIn().delay(1000).fadeOut();
};

var toggleErrorMessage = function() {
    $('.errorMessage').fadeIn();
};

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('rental', params.rental_id).then(function(data) {
            return {
                rental: data,
                successMessage: 'Successfully updated rental!',
                errorMessage: 'Something went wrong...'
            }
        });
    },
    actions: {
        updateRental(rentalData) {
            rentalData.save()
                .then(function(data) {
                    toggleSuccessMessage();
                }, function(error) {
                    toggleErrorMessage();
                });
        }
    }
});
