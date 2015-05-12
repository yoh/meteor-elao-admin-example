Template.things_edit.inheritsHooksFrom('collections_edit');
Template.things_edit.inheritsHelpersFrom('collections_edit');
Template.things_edit.inheritsEventsFrom('collections_edit');

Template.things_edit.hooks({
    rendered: function(){
    }
});

Template.things_edit.helpers({
    doc: function(){
        return Things.findOne({_id: this.id}) || {};
    },
    breadcrumb: function(){
        var item = Things.findOne({_id: this.id}) || {};
        var collection_filters = Session.get(this.collection + '_filters');

        return [
            {title: 'Admin', href: Router.path('admin_dashboard')},
            {title: 'Things', href: Router.path('admin_list', {collection: this.collection}) + collection_filters},
            {title: item, href: false}
        ];
    },
});
