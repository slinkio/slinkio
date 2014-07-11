import Ember from 'ember';
import WindowBinderMixin from 'slinkio/mixins/window-binder';

module('WindowBinderMixin');

// Replace this with your real tests.
test('it works', function() {
  var WindowBinderObject = Ember.Object.extend(WindowBinderMixin);
  var subject = WindowBinderObject.create();
  ok(subject);
});