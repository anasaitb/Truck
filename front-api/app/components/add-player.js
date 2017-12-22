import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addUser() {
      let player = this.get('player');
      let team = this.get('team');
      this.sendAction('action', team, player);
    }
  }
});
