/**
 * Thinggs publications for elao:meteor-admin
 */

// list
Meteor.publish('thinggs_list', function () {
    return [
        Thinggs.find(),
    ];
});

// new
Meteor.publish('thinggs_new', function () {
    return [];
});

// edit
Meteor.publish('thinggs_edit', function (id) {
    return [
        Thinggs.find({_id: id})
    ];
});
