/**
 * Things Collection
 */

Things = new Meteor.Collection('things');
Things.attachSchema(Schema.things);

Things.helpers({
    toString: function(){
        return this.firstname + " " + this.lastname;
    },
});
