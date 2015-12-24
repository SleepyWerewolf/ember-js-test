import Ember from 'ember';

export default Ember.Component.extend({
    isImageShowing: false,
    actions: {
        toggleImage() {
            if (this.isImageShowing) {
                this.set('isImageShowing', false);
            } else {
                this.set('isImageShowing', true);
            }
        }
    }
});
