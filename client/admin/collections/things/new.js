Template.things_new.inheritsHooksFrom('things_edit');
Template.things_new.inheritsHelpersFrom('things_edit');
Template.things_new.inheritsEventsFrom('things_edit');

Template.things_new.helpers({
    breadcrumb: function(){
        var collection_filters = Session.get(this.collection + '_filters');

        return [
            {title: 'Admin', href: Router.path('admin_dashboard')},
            {title: 'Things', href: Router.path('admin_list', {collection: this.collection}) + collection_filters},
            {title: 'New things', href: false}
        ];
    },
});
