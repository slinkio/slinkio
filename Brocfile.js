/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Use this to add additional libraries to the generated output files.
app.import(
  {
    development: 'vendor/ember-data/ember-data.js',
    production:  'vendor/ember-data/ember-data.prod.js'
  },
  {
    exports: {
      'ember-data': [ 'default' ]
    }
  }
);
/* Vendor CSS */
app.import('vendor/fontawesome/css/font-awesome.css');
app.import('vendor/nprogress/nprogress.css');

/* Vendor JS */
app.import('vendor/bootstrap/dist/js/bootstrap.min.js');
app.import('vendor/nprogress/nprogress.js');
app.import('vendor/gridster/src/jquery.gridster.js');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
    exports: {
      'ic-ajax': [
       'default',
        'defineFixture',
        'lookupFixture',
        'raw',
        'request'
      ]
    }
  }
);


module.exports = app.toTree();