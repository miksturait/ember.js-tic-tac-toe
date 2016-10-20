import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('element-tic-tac-toe', 'Integration | Component | element tic tac toe', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{element-tic-tac-toe}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#element-tic-tac-toe}}
      template block text
    {{/element-tic-tac-toe}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
