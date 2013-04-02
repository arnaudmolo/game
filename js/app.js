var hetic = hetic || {};
var ENTER_KEY = 13;

(function(){
	"use strict";
	hetic.appView = Backbone.View.extend({
		el: 'body',
		events: {
			'submit #popup form': 'formSubmit',
			'submit #search': 'search'
		},
		initialize: function(){
			$("[data-toggle=hidden]").hide();
		},
		showForm: function(){
			$("#popup").show();
		},
		hide: function(){
			$("#popup").hide();
			$.each($("#popup input[type=text]"), function(i, el){
				$(el).val('');
			});
		},
		formSubmit: function(e){
			var val = $(e.currentTarget).serializeObject();
			hetic.gallery.create(val);
			app.router.navigate('', {trigger: true});
			return false;
		},
		search: function(e){
			var val = $(e.currentTarget).find('input').val();
			if (val==='') {
				app.router.navigate('/');
				hetic.gallery.each(function(studient){
					studient.view.switchClass(true);
				});
				return false;
			}
			app.router.navigate('//search/'+val, {trigger: true});
			return false;
		}
	});
	hetic.app = new hetic.appView();
}());