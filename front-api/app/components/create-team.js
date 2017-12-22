import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createTeam() {
      this.sendAction('action', this.get('teamName'));
    }
  }
});
