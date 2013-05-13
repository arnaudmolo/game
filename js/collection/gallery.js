// Collection
var hetic = hetic || {};

(function(){
	"use strict";
	var Gallery = Backbone.Collection.extend({
		model: hetic.Student,
		initialize: function(){
			this.on('add', this.render);
		},
		render: function(model){
			$("#student-list").prepend( model.view.render().el );
		}
	});
	hetic.gallery = new Gallery();



	hetic.gallery.create({firstname: 'Anthony', lastname: 'Zaccardi', image: 'img/zaccardi.png', promotion: 2015, website:"http://www.anthonyzaccardi.com/", capacities: ['html']});
	hetic.gallery.create({firstname: 'Arnaud', lastname: 'Pichon', image: 'img/arnaud.png', promotion: 2015, website:"http://www.onesime.fr", capacities: ['html', 'backbone']});
	hetic.gallery.create({firstname: 'Mathieu', lastname: 'Dutto', image: 'img/mathieu.jpg', promotion: 2015, website:"http://www.mathieudutto.fr", capacities: ['html', 'css', 'php']});


	
}());