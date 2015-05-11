Template.players_list.inheritsHooksFrom('collections_list');
Template.players_list.inheritsHelpersFrom('collections_list');
Template.players_list.inheritsEventsFrom('collections_list');

Template.players_list.helpers({
    items: function(){
        // filters
        var filters = [];
        var queryObject = Router.current().location.get().queryObject;

        if (queryObject.name !== undefined && queryObject.name !== '') {
            filters.push({$or: [
                {firstname: { $regex: queryObject.name, $options: 'i' }},
                {lastname: { $regex: queryObject.name, $options: 'i' }}
            ]});
        }

        filters = filters.length ? {$and: filters} : {};

        return Players.find(filters);
    },
    breadcrumb: function(){
        return [
            {href: Router.path('admin_dashboard'), title: 'Admin'},
            {href: false, title: 'Players'},
        ];
    },
});

Template.players_filters.inheritsHooksFrom('collections_filters');
Template.players_filters.inheritsHelpersFrom('collections_filters');
Template.players_filters.inheritsEventsFrom('collections_filters');

Template.players_filters.helpers({
    schema: function(){
        return new SimpleSchema({
            name: {
                type: String,
                label: "Firstname or lastname",
                max: 149
            },
        });
    },
    doc: function(){
        return Router.current().location.get().queryObject;
    }
});
