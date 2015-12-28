import Ember from 'ember';

var successMessage = function() {
    alert('Successfully updated rental!');
};

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('rental', params.rental_id);
        /*
        var rental = this.store.findRecord('rental', params.rental_id);
        return {
            rental: rental,
            successMessage: 'Successfully updated rental!',
            errorMessage: 'Something went wrong...'
        };
        */
    },
    actions: {
        updateRental(rentalData) {
            rentalData.save()
                .then(function(data) {
                    alert('successfully saved');
                    //successMessage();
                }, function(error) {
                    alert('failed');
                    //errorMessage();
                });
        }
    }
});
