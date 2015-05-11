/**
 * Foos
 */
Meteor.publish('foos_list', function () {
    return [
        Foos.find(),
    ];
});

Meteor.publish('foos_new', function () {
    return [];
});

Meteor.publish('foos_edit', function (id) {
    return [
        Foos.find({_id: id})
    ];
});
