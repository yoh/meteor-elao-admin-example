Foos = new Meteor.Collection('foos');
Foos.attachSchema(Schema.foos);

Foos.helpers({
    __toString: function(){
        return this.title;
    },
});
