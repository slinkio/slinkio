import Ember from 'ember';
import WindowBinderMixin from 'slinkio/mixins/window-binder';

export default Ember.View.extend(WindowBinderMixin, {
  templateName: 'grid',
  classNames: [ 'gridster' ],

  widget_dimensions: {
    width: 300,
    height: 120
  },

  // View class hooks
  didInsertElement: function () {
    this.windowDidResize();
    this.setupWindowBindings('resize');
  },

  willDestroyElement: function () {
    this.teardownWindowBindings('resize');
  },

  windowDidResize: function () {
    console.debug("resized");
    var winwidth = $(window).width(),
        cols     = Math.floor( winwidth / this.get('widget_dimensions.width') );
    console.debug(winwidth);
    if(cols < 1) {
      console.debug("cols < 1");
      cols = 1;
      this.set('widget_dimensions.width', winwidth);
    }
    return this.set('cols', cols);
  },

  gridDidChange: function () {
    console.debug("rerender");
    Ember.run.scheduleOnce('afterRender', this, this._renderGrid);
  }.observes('controller.content', 'childViews.@each.ready', 'cols', 'widget_dimensions.width', 'widget_dimensions.height'),

  _renderGrid: function () {
    var dimensions = this.get('widget_dimensions');
    // Render the grid with the gridster api
    var grid = this.$().find('.grid').gridster({
      widget_margins: [0, 0],
      widget_base_dimensions: [ dimensions.width, dimensions.height ],
      widget_selector: '.ember-view.grid-item',
      max_cols: 2//this.get('cols')
    });
    console.debug("max_cols", this.get('cols'));

    // Grab the api object and inject it as a view property
    this.set('grid', grid.data('gridster'));
  },

  enableGrid: function () {
    Ember.run.scheduleOnce('afterRender', this, function () {
      this.get('grid').enable();
    });
  }.observes('grid')
});