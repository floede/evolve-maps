if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
      set: 
        { name: "Evolve Hype Callout Maps", keyword: [ "callouts", "names"], source: "http://www.evolvehype.com", maps: [
            { title: "Armory", key: "1", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/ARMORY2.png" },
            { title: "Aviary", key: "2", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/AVIARY2.png" },
            { title: "Barracks", key: "3", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/BARRACKS2.png" },
            { title: "The Dam", key: "4", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/DAM2.png" },
            { title: "Distillery", key: "5", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/DISTILLERY2.png" },
            { title: "Fusion Plant", key: "6", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/FUSIONPLANT2.png" },
            { title: "Med Lab", key: "7", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/MEDLAB2.png" },
            { title: "Orbital Drill", key: "8", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/ORBITALDRILL2.png" },
            { title: "Rendering Plant", key: "9", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/RENDERINGPLANT2.png" },
            { title: "Refueling Tower", key: "10", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/REFUELINGTOWER2.png" },
            { title: "Weather Control", key: "11", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/WEATHERCONTROL2.png" },
            { title: "Wraith Trap", key: "12", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/WRAITHTRAP2.png" }
        ]}
  });
}
