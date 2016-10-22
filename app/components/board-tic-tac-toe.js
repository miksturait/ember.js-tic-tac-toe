import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  nextMoves: {
    'X': 'O',
    'O': 'X'
  },
  fields: Ember.computed('size', function () {
    // TODO rewrite as more generic
    let fieldIds = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    return fieldIds.map((list) => list.map((x) => `field${x}`));
  }),
  nextMove: Ember.computed('game.lastMove', function () {
    return this.nextMoves[this.get('game.lastMove')];
  }),
  actions: {
    makeNextMove(field) {
      if (this.get(`game.${field}`) === "") {
        let move = this.get('nextMove');
        this.set('game.lastMove', move);
        this.set(`game.${field}`, move);
        this.get('game').save();
      }
    }
  }
});
