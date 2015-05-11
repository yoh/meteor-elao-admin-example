Template.players_edit.inheritsHooksFrom('collections_edit');
Template.players_edit.inheritsHelpersFrom('collections_edit');
Template.players_edit.inheritsEventsFrom('collections_edit');

Template.players_edit.hooks({
    rendered: function(){
    }
});

Template.players_edit.helpers({
    doc: function(){
        return Players.findOne({_id: this.id}) || {};
    },
    breadcrumb: function(){
        var item = Players.findOne({_id: this.id}) || {};
        var collection_filters = Session.get(this.collection + '_filters');

        return [
            {title: 'Admin', href: Router.path('admin_dashboard')},
            {title: 'Players', href: Router.path('admin_list', {collection: this.collection}) + collection_filters},
            {title:  item, href: false}
        ];
    },
});
