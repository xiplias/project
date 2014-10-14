Container = new Meteor.Collection('Container'/*, {
  schema: new SimpleSchema({
    title: {
      type: String
    },
    content: {
      type: String
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
}*/);

Container.helpers({
  addItem: function (itemId) {
    Container.update({ _id: this._id },{ $push: { stories: itemId }});
  },
  allStories: function () {
    return Item.find({_id: { $in: this.stories }}); 
  }
});

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Container.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
