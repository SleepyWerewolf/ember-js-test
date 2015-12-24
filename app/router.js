import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rentals');
  this.route('rental', { path: '/rentals/:rental_id' });
});

export default Router;
