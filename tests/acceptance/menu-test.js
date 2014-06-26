import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Menu', {
  setup: function () {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Confirm navigation elements exist', function () {
  visit('/');

  andThen(function () {
    equal(find('.ember-view.top-nav:visible').length, 1, "Top nav element is visible");
    equal(find('.row .logo:visible', '.ember-view.top-nav').length, 1, "Logo is visible");
    equal(find('.row .btn.btn-menu:visible', '.ember-view.top-nav').length, 1, "Menu button element is visible");
  });
});

test('Menu should open properly', function () {
  visit('/');
  click('.top-nav .btn.btn-menu:visible');
  
  andThen(function () {
    ok(find('.side-menu').hasClass('show'), "Side menu has class to show");
    ok(find('.ember-view').first().hasClass('show-side-menu'), "Top view has class to show");
  });
});