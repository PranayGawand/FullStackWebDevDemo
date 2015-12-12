if (Meteor.isClient) {
    // counter starts at 0
    var now = new Date().toISOString();
    Session.setDefault('time', now);
    console.log(now);
    Template.hello.helpers({
        time: function () {
          return Session.get('time');
        }
    });
    
}

if (Meteor.isServer) {
    Meteor.startup(function () {
      // code to run on server at startup
    });
}
