Template.foos_new.inheritsHooksFrom('foos_edit');
Template.foos_new.inheritsHelpersFrom('foos_edit');
Template.foos_new.inheritsEventsFrom('foos_edit');

Template.foos_new.helpers({
    breadcrumb: function(){
        var collection_filters = Session.get(this.collection + '_filters');

        return [
            {title: 'Admin', href: Router.path('admin_dashboard')},
            {title: 'Foos', href: Router.path('admin_list', {collection: this.collection}) + collection_filters},
            {title: 'New foo', href: false}
        ];
    },
});
