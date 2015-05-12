Template.thinggs_new.inheritsHooksFrom('thinggs_edit');
Template.thinggs_new.inheritsHelpersFrom('thinggs_edit');
Template.thinggs_new.inheritsEventsFrom('thinggs_edit');

Template.thinggs_new.helpers({
    breadcrumb: function(){
        var collection_filters = Session.get(this.collection + '_filters');

        return [
            {title: 'Admin', href: Router.path('admin_dashboard')},
            {title: 'Thinggs', href: Router.path('admin_list', {collection: this.collection}) + collection_filters},
            {title: 'New thinggs', href: false}
        ];
    },
});
