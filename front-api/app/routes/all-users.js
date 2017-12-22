import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  actions: {
    createUser(username) {
      var user = this.store.createRecord('user', { name: username });
      user.save();
    }
  }
});
