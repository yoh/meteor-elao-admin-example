Template.thinggs_edit.inheritsHooksFrom('collections_edit');
Template.thinggs_edit.inheritsHelpersFrom('collections_edit');
Template.thinggs_edit.inheritsEventsFrom('collections_edit');

Template.thinggs_edit.hooks({
    rendered: function(){
    }
});

Template.thinggs_edit.helpers({
    doc: function(){
        return Thinggs.findOne({_id: this.id}) || {};
    },
    breadcrumb: function(){
        var item = Thinggs.findOne({_id: this.id}) || {};
        var collection_filters = Session.get(this.collection + '_filters');

        return [
            {title: 'Admin', href: Router.path('admin_dashboard')},
            {title: 'Thinggs', href: Router.path('admin_list', {collection: this.collection}) + collection_filters},
            {title: item, href: false}
        ];
    },
});
