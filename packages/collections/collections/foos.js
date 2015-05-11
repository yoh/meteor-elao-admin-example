Foos = new Meteor.Collection('foos');
Foos.attachSchema(Schema.foos);

Foos.helpers({
    toString: function(){
        return this.title;
    },
});
