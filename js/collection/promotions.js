var hetic = hetic || {};
(function(){
	"use strict";
	var Promotion = Backbone.Collection.extend({
		model: hetic.Studient,
		initialize: function(){
			this.on('add', this.render, this);
			this.on('edit', this.render, this);
		},
		render: function(model){
			$("#studient-list").prepend( model.view.render().el );
		}
	});
	hetic.gallery = new Promotion();
	hetic.gallery.create({firstname: 'Anthony', lastname: 'Zaccardi', image: 'img/zaccardi.png', promotion: '2015', capacities: ['html']});
	hetic.gallery.create({firstname: 'Arnaud', lastname: 'Pichon', image: 'img/arnaud.png', promotion: 'lol', capacities: ['html', 'backbone']});
}());