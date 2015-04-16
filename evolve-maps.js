MapSets = new Mongo.Collection("mapsets");

if (Meteor.isClient) {
  // This code only runs on the client

  Template.body.helpers({
    mapsets: function () {
      return MapSets.find({});
    },
    firstset: function () {
      return MapSets.find({}, {limit: 1}).fetch()[0];
    }
  });
}
