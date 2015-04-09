if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
      set: 
        { name: "Evolve Hype Callout Maps", keyword: [ "callouts", "names"], source: "http://www.evolvehype.com", maps: [
            { title: "Armory", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/ARMORY2.png" },
            { title: "Aviary", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/AVIARY2.png" },
            { title: "Barracks", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/BARRACKS2.png" },
            { title: "The Dam", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/DAM2.png" },
            { title: "Distillery", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/DISTILLERY2.png" },
            { title: "Fusion Plant", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/FUSIONPLANT2.png" },
            { title: "Med Lab", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/MEDLAB2.png" },
            { title: "Orbital Drill", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/ORBITALDRILL2.png" },
            { title: "Rendering Plant", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/RENDERINGPLANT2.png" },
            { title: "Refueling Tower", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/REFUELINGTOWER2.png" },
            { title: "Weather Control", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/WEATHERCONTROL2.png" },
            { title: "Wraith Trap", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/02/WRAITHTRAP2.png" }
        ]}
  });
}
