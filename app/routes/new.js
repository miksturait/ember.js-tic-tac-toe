import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('game').save();
  },

  afterModel(model, transition) {
    this.transitionTo('myGame', model.id);
  }
});
