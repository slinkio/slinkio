import Ember from 'ember';
import WindowBinderMixin from 'slinkio/mixins/window-binder';

export default Ember.View.extend(WindowBinderMixin, {
  templateName: 'grid-item',
  classNames: [ 'grid-item' ],

  // Bind the following attributes so that the gridster api can build the widget
  attributeBindings: [ 'row:data-row', 'col:data-col', 'sizeX:data-sizex', 'sizeY:data-sizey' ],

  // Alias the following properties so our attribute bindings work
  row: Ember.computed.alias('controller.content.row'),
  col: Ember.computed.alias('controller.content.col'),
  sizeX: Ember.computed.alias('controller.content.sizeX'),
  sizeY: Ember.computed.alias('controller.content.sizeY'),

  // View class hooks
  didInsertElement: function () {
    this.set('ready', true);
  }.observes('content')

});