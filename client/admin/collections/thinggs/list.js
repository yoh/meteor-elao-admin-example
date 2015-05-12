Template.thinggs_list.inheritsHooksFrom('collections_list');
Template.thinggs_list.inheritsHelpersFrom('collections_list');
Template.thinggs_list.inheritsEventsFrom('collections_list');

Template.thinggs_list.helpers({
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

        return Thinggs.find(filters);
    },
    breadcrumb: function(){
        return [
            {href: Router.path('admin_dashboard'), title: 'Admin'},
            {href: false, title: 'Thinggs'},
        ];
    },
});

Template.thinggs_filters.inheritsHooksFrom('collections_filters');
Template.thinggs_filters.inheritsHelpersFrom('collections_filters');
Template.thinggs_filters.inheritsEventsFrom('collections_filters');

Template.thinggs_filters.helpers({
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
