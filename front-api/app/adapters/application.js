import DS from 'ember-data';
import ENV from 'view-api/config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: ENV.APP.API_HOST
});
