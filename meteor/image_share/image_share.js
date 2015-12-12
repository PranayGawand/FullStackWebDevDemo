if (Meteor.isClient) {

    // console.log("I am the client");
    var img_data = {
        img_src:"lion.jpg",
        img_alt:"A lion"
    };
    Template.images.helpers(img_data);
}

if (Meteor.isServer) {

    console.log("I am the server");
}
