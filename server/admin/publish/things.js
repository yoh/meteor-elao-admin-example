/**
 * Things publications for elao:meteor-admin
 */

// list
Meteor.publish('things_list', function () {
    return [
        Things.find(),
    ];
});

// new
Meteor.publish('things_new', function () {
    return [];
});

// edit
Meteor.publish('things_edit', function (id) {
    return [
        Things.find({_id: id})
    ];
});
