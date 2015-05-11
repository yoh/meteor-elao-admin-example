Template.foos_edit.inheritsHooksFrom('collections_edit');
Template.foos_edit.inheritsHelpersFrom('collections_edit');
Template.foos_edit.inheritsEventsFrom('collections_edit');

Template.foos_edit.hooks({
    rendered: function(){
        var foo = Foos.findOne({});
        if (foo) {
            this.$('.select2').val(foo.players).trigger('change');
        }
    }
});

Template.foos_edit.helpers({
    doc: function(){
        return Foos.findOne({_id: this.id}) || {};
    },
    breadcrumb: function(){
        var item = Foos.findOne({_id: this.id}) || {};
        var collection_filters = Session.get(this.collection + '_filters');

        return [
            {title: 'Admin', href: Router.path('admin_dashboard')},
            {title: 'Foos', href: Router.path('admin_list', {collection: this.collection}) + collection_filters},
            {title: item.title, href: false}
        ];
    },
});
