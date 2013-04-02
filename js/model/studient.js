var hetic = hetic || {};
(function(){
	"use strict";
	hetic.Studient = Backbone.Model.extend({
		defaults: {
			firstname: '',
			lastname:'',
			capacities: [],
			image: '',
			promotion: 2015,
			show: 'true'
		},
		validate: function(d){
			if (d.promotion) {
				d.promotion = parseInt(d.promotion);
				console.log(d.promotion);
				if(typeof d.promotion === "number" || !isNaN(d.promotion) ){
				}else{
					console.log('error');
					return "essaye avec un chiffre morray";
				}
			} else{
				return "Une promotion doit etre renseingée.";
			}
		},
		sync: function(){},
		initialize: function(){
			this.view = new hetic.StudientView({model: this});
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
		},
		show: function(bool){
			this.set("show", bool);
		}
	});
}());