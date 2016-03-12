import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticateSessionWithGoogle() {
      this.get('session').authenticate('authenticator:torii', 'google-oauth2').catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
