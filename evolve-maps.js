if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
      set: 
        { name: "Evolve Hype Buff Maps", keyword: [ "callouts", "names"], source: "http://www.evolvehype.com", maps: [
            { title: "Armory", key: "1", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/ARMORYPERKMAP.png" },
            { title: "Aviary", key: "2", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/AVIARYPERKMAP.png" },
            { title: "Barracks", key: "3", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/BARRACKSPERKMAP.png" },
            { title: "The Dam", key: "4", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/THEDAMPERKMAP.png" },
            { title: "Distillery", key: "5", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/DISTILLERYPERKMAP.png" },
            { title: "Fusion Plant", key: "6", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/FUSIONPLANTPERKMAP.png" },
            { title: "Med Lab", key: "7", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/MEDLABPERKMAP.png" },
            { title: "Orbital Drill", key: "8", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/ORBITALDRILLPERKMAP.png" },
            { title: "Rendering Plant", key: "9", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/RENDERINGPLANTPERKMAP.png" },
            { title: "Refueling Tower", key: "10", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/REFUELINGTOWERPERKMAP.png" },
            { title: "Weather Control", key: "11", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/WEATHERCONTROLPERKMAP.png" },
            { title: "Wraith Trap", key: "12", imgUrl: "http://evolvehype.com/wp-content/uploads/2015/03/WRAITHTRAPPERKMAP.png" }
        ]}
  });
}
