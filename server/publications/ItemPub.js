Meteor.publish('Item', function () {
  return Item.find();
});
