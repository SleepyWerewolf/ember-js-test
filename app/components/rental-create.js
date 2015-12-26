import Ember from 'ember';


var test = {
    title: 'Happy Fun Place',
    owner: 'Mr. Happy',
    city: 'New York',
    type: 'Alleyway',
    image: 'http://untappedcities.com/wp-content/uploads/2014/05/Cortlandt-Alley-Chinatown-Secrets-NYC.jpg',
    bedrooms: 0
};

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
