// MODEL STUDENT
var hetic = hetic || {};

(function(){
	"use strict";
	hetic.Student = Backbone.Model.extend({
		defaults: {
			firstname: '',
			lastname:'',
			capacities: [],
			image: '',
			promotion: 2015,
			show: 'true',
			website: ''
		},
		view: hetic.StudentView,
		initialize: function(){
			this.view = new hetic.StudentView({model: this});
		},
		sync: function(){
		},
		hasCapacity: function(search){
			if (search==='') {
				this.view.switchClass(true);
				return;
			}
			var el = false;
			_.each(this.get("capacities"), function(element){
				if (element === search) {
					el = true;
				}
			});
			this.view.switchClass(el);
			return el;
		}
	});
}());