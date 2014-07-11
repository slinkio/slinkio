import Ember from 'ember';
import WindowBinderMixin from 'slinkio/mixins/window-binder';

export default Ember.View.extend(WindowBinderMixin, {
  templateName: 'grid',
  classNames: [ 'gridster' ],

  // View class hooks
  didInsertElement: function () {
    this.setupWindowBindings();
  },

  willDestroyElement: function () {
    this.teardownWindowBindings();
  },

  // TESTS

  /*
    TODO:
    Implement didResize to handle column limiting on gridster plugin
  */
  windowDidScroll: function () {
    if(this.get('didScroll')) {
      console.debug("scrolled");
      this.set('didScroll', false);
    }
  }.observes('didScroll'),

  windowDidResize: function () {
    if(this.get('didResize')) {
      console.debug("resized");
      this.set('didResize', false);
    }
  }.observes('didResize'),
  // ./ TESTS

  gridDidChange: function () {
    Ember.run.scheduleOnce('afterRender', this, this._renderGrid);
  }.observes('controller.content', 'childViews.@each.ready'),

  _renderGrid: function () {
    // Render the grid with the gridster api
    var grid = this.$().find('.grid').gridster({
      widget_margins: [0, 0],
      widget_base_dimensions: [300, 130],
      widget_selector: '.ember-view.grid-item'
    });

    // Grab the api object and inject it as a view property
    this.set('grid', grid.data('gridster'));
  },

  enableGrid: function () {
    Ember.run.scheduleOnce('afterRender', this, function () {
      this.get('grid').enable();
    });
  }.observes('grid')
});