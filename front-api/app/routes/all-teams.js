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
      team.save();
    },
    addPlayer(team, player){
      this.store.find('user', player).then(function(playerObj) {
        team.get('players').then(function(players) {
          players.pushObject(playerObj);
          team.save();
          playerObj.save();
        });
      });
    }
  }
});
