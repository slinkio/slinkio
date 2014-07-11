import Ember from 'ember';

var DashboardController = Ember.Controller.extend({
  gridItems: [
    {
      name: 'my widget',
      color: '00000',
      type: 'weather',
      row: 1,
      col: 1,
      sizeX: 1,
      sizeY: 1
    },
    {
      name: 'my 2nd widget',
      color: '00000',
      type: 'weather',
      row: 1,
      col: 2,
      sizeX: 1,
      sizeY: 1
    },
    {
      name: 'my 3rd widget',
      color: '00000',
      type: 'weather',
      row: 1,
      col: 3,
      sizeX: 1,
      sizeY: 1
    }
  ]
});

export default DashboardController;