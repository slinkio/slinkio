/* global require */

var Application = require('slinkio/app')['default'];
var Router = require('slinkio/router')['default'];

export default function startApp(attrs) {
  var App,

  attributes = Ember.merge({
    // useful Test defaults
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION: false,
    LOG_VIEW_LOOKUPS: false
  }, attrs); // but you can override

  Router.reopen({
    location: 'none'
  });

  Ember.run(function(){
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset();

  return App;
}