import Ember from "ember";

var ApplicationRoute = Ember.Route.extend({
	// Define Global Action Handlers
	actions: {
		showModal: function (id, staticModal, forceAppend) {
			// Assign the modal element to a variable
			var el = $("#" + id);
			// If the forceAppend variable exists, we will append it to that identifer; useful for nested view modals
			if(forceAppend) {
				// Reassign the element
				el = el.appendTo(forceAppend);
			}
			// If we are going to be rendering this as a static, non-dismissable modal, set those properties
			if(staticModal) {
				el.modal({
  					keyboard: false,
					backdrop: 'static'
				});
			}
			// Show the modal
			el.modal('show');
		}
	}
});

export default ApplicationRoute;