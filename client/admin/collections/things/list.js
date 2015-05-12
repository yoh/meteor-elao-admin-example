Template.things_list.inheritsHooksFrom('collections_list');
Template.things_list.inheritsHelpersFrom('collections_list');
Template.things_list.inheritsEventsFrom('collections_list');

Template.things_list.helpers({
    items: function(){
        // filters
        var filters = [];
        var queryObject = Router.current().location.get().queryObject;

        if (queryObject.text !== undefined && queryObject.text !== '') {
            filters.push({$or: [
                {firstname: { $regex: queryObject.text, $options: 'i' }},
                {lastname: { $regex: queryObject.text, $options: 'i' }}
            ]});
        }

        filters = filters.length ? {$and: filters} : {};

        return Things.find(filters);
    },
    breadcrumb: function(){
        return [
            {href: Router.path('admin_dashboard'), title: 'Admin'},
            {href: false, title: 'Things'},
        ];
    },
});

Template.things_filters.inheritsHooksFrom('collections_filters');
Template.things_filters.inheritsHelpersFrom('collections_filters');
Template.things_filters.inheritsEventsFrom('collections_filters');

Template.things_filters.helpers({
    schema: function(){
        return new SimpleSchema({
            text: {
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
