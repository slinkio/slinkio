import Ember from 'ember';

var SideMenuView = Ember.View.extend({
	templateName: 'side-menu',
	classNames: ['side-menu'],
	didInsertElement: function () {
		Ember.run.scheduleOnce('afterRender', this, function () {
			this.get('parentView').get('controller').set('sideMenuIsReady', true);
		});
	},
	toggleMenu: function () {
		this.get('parentView.parentView').toggleMenuClass();
		this.$().toggleClass('show');
	}
});

export default SideMenuView;