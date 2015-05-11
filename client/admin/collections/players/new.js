Template.players_new.inheritsHooksFrom('players_edit');
Template.players_new.inheritsHelpersFrom('players_edit');
Template.players_new.inheritsEventsFrom('players_edit');

Template.players_new.helpers({
    breadcrumb: function(){
        var collection_filters = Session.get(this.collection + '_filters');

        return [
            {title: 'Admin', href: Router.path('admin_dashboard')},
            {title: 'Players', href: Router.path('admin_list', {collection: this.collection}) + collection_filters},
            {title: 'New players', href: false}
        ];
    },
});
