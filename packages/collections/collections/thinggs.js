/**
 * Thinggs Collection
 */

Thinggs = new Meteor.Collection('thinggs');
Thinggs.attachSchema(Schema.thinggs);

Thinggs.helpers({
    toString: function(){
        return this.firstname + " " + this.lastname;
    },
});
