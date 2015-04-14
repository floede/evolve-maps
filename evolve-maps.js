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
  Template.body.events({
    "submit .new-mapset": function (event) {
      var name = event.target.name.value;
      var keywords = event.target.keywords.value;
      var source = event.target.source.value;
      var armoryMap = event.target.armory.value;
      var aviaryMap = event.target.aviary.value;
      var barracksMap = event.target.barracks.value;
      var thedamMap = event.target.thedam.value;
      var distilleryMap = event.target.distillery.value;
      var fusionplantMap = event.target.fusionplant.value;
      var medlabMap = event.target.medlab.value;
      var orbitaldrillMap = event.target.orbitaldrill.value;
      var renderingplantMap = event.target.renderingplant.value;
      var refuelingtowerMap = event.target.refuelingtower.value;
      var weathercontrolMap = event.target.weathercontrol.value;
      var wraithtrapMap = event.target.wraithtrap.value;

      MapSets.insert({
        set: { name: name, keywords: keywords, source: source,
          maps: [
            { title: "Armory", key: "1", imgUrl: armoryMap },
            { title: "Aviary", key: "2", imgUrl: aviaryMap },
            { title: "Barracks", key: "3", imgUrl: barracksMap },
            { title: "The Dam", key: "4", imgUrl: thedamMap },
            { title: "Distillery", key: "5", imgUrl: distilleryMap },
            { title: "Fusion Plant", key: "6", imgUrl: fusionplantMap },
            { title: "Med Lab", key: "7", imgUrl: medlabMap },
            { title: "Orbital Drill", key: "8", imgUrl: orbitaldrillMap },
            { title: "Rendering Plant", key: "9", imgUrl: renderingplantMap },
            { title: "Refueling Tower", key: "10", imgUrl: refuelingtowerMap },
            { title: "Weather Control", key: "11", imgUrl: weathercontrolMap },
            { title: "Wraith Trap", key: "12", imgUrl: wraithtrapMap }
        ]}});

      // Clear form
      event.target.name.value = "";
      event.target.keywords.value = "";
      event.target.source.value = "";
      event.target.armory.value = "";
      event.target.aviary.value = "";
      event.target.barracks.value = "";
      event.target.thedam.value = "";
      event.target.distillery.value = "";
      event.target.fusionplant.value = "";
      event.target.medlab.value = "";
      event.target.orbitaldrill.value = "";
      event.target.renderingplant.value = "";
      event.target.refuelingtower.value = "";
      event.target.weathercontrol.value = "";
      event.target.wraithtrap.value = "";

      // Prevent default form submit
      return false;
    },

    "click .delete": function () {
      MapSets.remove(this._id);
    }

  });
}
