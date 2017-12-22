/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'view-api',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'connect-src': '"self" http://localhost:3000',
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'font-src': "'self' data: https://fonts.gstatic.com",
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' maps.gstatic.com",
      'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
    },
    APP: {
      API_HOST: 'http://localhost:3000'
      // Here you can pass flags/options to your application instance
      // when it is created
    }

  };

  ENV.googleMap = {
    libraries: ['places'],
    apiKey: 'AIzaSyAYjCU8aVfHoRMq4Rw9WoSVlNcak5SC2p4'
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
