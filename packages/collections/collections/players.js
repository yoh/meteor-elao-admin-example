Players = new Meteor.Collection('players');
Players.attachSchema(Schema.players);

Players.helpers({
    toString: function(){
        return this.firstname + " " + this.lastname;
    },
});
