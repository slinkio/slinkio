import Ember from 'ember';

var NavigationView = Ember.View.extend({
	tagName: 'nav',
	classNames: ['top-nav'],
	templateName: 'navigation',
	didInsertElement: function () {
		// We need to initialize the scroll handlers at this point.
		Ember.run.scheduleOnce('afterRender', this, this.initialize);
	},
	initialize: function () {
		// Initialize the view
		var $header = this.$().parent(),
			$container = $(window),
			height = $header.height(),
			previous = {
				offset: 0,
				translate: 0
			},
			view = this,
			offset, delta, translate;
		// Hack backface for 3D transform
		$header.css("backface-visibility", "hidden");
		$container.css("transform", "translateZ(0)");
		// Listen for the scroll
		$container.scroll(function () {
			if(view.get('controller.showingSideMenu')) {
				return $header.css("transform", "");
			}
			offset = $container.scrollTop();
			// Calculate delta
			delta  = offset - previous.offset;
			translate = delta > 0 ? Math.max(-height, previous.translate - delta) : Math.min(0, previous.translate - delta);
			if(offset < 0) {
				translate = 0;
			}
			$header.css("transform", "translate(0,"+ (offset+translate) +"px)");
			previous = {
				offset: offset,
				translate: translate
			};
		});
	},
	shouldAnimateMenu: function () {
		/*
			After showingSideMenu changes on the controller, we need to animate the views.

			Next few lines determine if the side menu view has been rendered yet based on 
			the property the side menu view sets in it's didInsertElement hook, scheduled 
			in the ember run loop.
		*/
		if(!this.get('controller.sideMenuIsReady')) {
			return;
		}
		// Turn off the 3D accleration per the intialize function.
		this.$().parent().css("transform", "");

		// We find the sideMenu view and call the pushOut() function.
		this.get('childViews').findBy('viewName', 'sideMenu').toggleMenu();
	}.observes('controller.showingSideMenu'),

});

export default NavigationView;