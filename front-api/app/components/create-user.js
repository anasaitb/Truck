import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createUser() {
      this.sendAction('action', this.get('userName'));
    }
  }
});
