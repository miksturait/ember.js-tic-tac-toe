import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    if (this.get('value') === undefined) {
      this.set('value', this.takeIt());
    }
  }
});
