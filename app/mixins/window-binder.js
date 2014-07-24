import Ember from 'ember';

export default Ember.Mixin.create({
  /*
    Mixin setup
    NOTE: Must be implemented on init, didTransition, or didInsertElement hooks
  */
  setupWindowBindings: function ( events ) {
    $(window).on(events, { emEl: this }, this._bindToProperties);
  },

  /*
    Mixin teardown
    NOTE: Can be implemented on willTransition or willDestroyElement hooks
  */
  teardownWindowBindings: function ( events ) {
    $(window).off(events, this._bindToProperties);
  },

  _bindToProperties: function ( event ) {
    var fn = eval('event.data.emEl.windowDid' + event.type.charAt(0).toUpperCase() + event.type.slice(1));
    if(typeof fn === "function") {
      Ember.run.throttle(event.data.emEl, fn, 250);
    }
  }
});