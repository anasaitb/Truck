import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      teams: this.store.findAll('team'),
      users: this.store.findAll('user')
    };
  },
  actions: {
    createTeam(teamName) {
      var team = this.store.createRecord('team', { name: teamName });
      this.sendAction('action', this.get('teamName'));
      team.save();
    },
    actions: {
      createUser(username) {
        var user = this.store.createRecord('user', { name: username });
        //this.sendAction('action', this.get('userName'));
        user.save();
      }
    }

  }
});
