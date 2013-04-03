var hetic = hetic || {};

(function(){
    "use strict";
    hetic.StudentView = Backbone.View.extend({
        tagName: 'article',
        className: function(){
            return this.model.get('show');
        },
        events: {
            'dblclick .toEdit': 'edit',
            'keypress .editing input': 'updateOnEnter'
        },
        template: _.template( $("#student-template").html() ),
        model: hetic.Student,
        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function(){
            this.$el.html( this.template (this.model.toJSON()));
            return this;
        },
        clear: function(){
            this.model.destroy();
        },
        switchClass: function(el){
            this.model.set('show',el);
            this.className = el;
            this.el.setAttribute('class', el);
        },
        edit: function(e){
            e.currentTarget.classList.add('editing');
            console.log(e.currentTarget.getElementsByTagName('input'));
            e.currentTarget.getElementsByTagName('input')[0].setAttribute('autofocus');
        },
        updateOnEnter: function(e){
            if (e.which === ENTER_KEY) {
                var val = e.currentTarget.value;
                if (val) {
                    this.model.save( e.currentTarget.getAttribute("name"), val);
                }
                e.currentTarget.parentElement.classList.remove('editing');
            }
        }
    });
}());