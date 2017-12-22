import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('all-users');
  this.route('all-teams');
  this.route('login');
  this.route('register');
  this.route('dashboard');
});

export default Router;
