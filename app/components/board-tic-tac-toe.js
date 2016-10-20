import Ember from 'ember';

export default Ember.Component.extend({
  lastMove: 'O',
  nextMoves: {
    'X': 'O',
    'O': 'X'
  },
  fields: Ember.computed('size', function () {
    // TODO rewrite as more generic
    let fieldIds = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    return fieldIds.map((list) => list.map((x) => `field_${x}`));
  }),
  nextMove: Ember.computed('lastMove', function () {
    return this.nextMoves[this.lastMove];
  }),
  actions: {
    makeNextMove() {
      this.set('lastMove', this.get('nextMove'));
      return this.get('lastMove');
    }
  }
});
