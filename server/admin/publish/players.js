/**
 * Players publications for elao:meteor-admin
 */

// list
Meteor.publish('players_list', function () {
    return [
        Players.find(),
    ];
});

// new
Meteor.publish('players_new', function () {
    return [];
});

// edit
Meteor.publish('players_edit', function (id) {
    return [
        Players.find({_id: id})
    ];
});
