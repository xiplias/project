Meteor.publish('Container', function () {
  return Container.find();
});
