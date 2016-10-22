import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('myGame', { path: '/my-game/:game_id'});
  this.route('playWithMe', { path: '/play-with-me/:game_id' });
  this.route('new');
});

export default Router;
