var hetic = hetic || {};

(function(){
	"use strict";
	var Workspace = Backbone.Router.extend({
		routes:{
			'search/:query': 'search',
			'add': 'add',
			'': 'init'
		},
		add: function(){
			hetic.app.showForm();
		},
		search: function(search){
			console.log('search : ', search);
			$("#suggest").val(search);
			hetic.gallery.each(
				function(student){
					student.hasCapacity(search);
				}
			);
		},
		init: function(){
			hetic.app.hide();
		}
	});
	app.router = new Workspace();
	Backbone.history.start();
}());