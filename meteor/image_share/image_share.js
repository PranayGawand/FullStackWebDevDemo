if (Meteor.isClient) {

    // console.log("I am the client");
    var img_data = [
        {
        img_src:"lion.jpg",
        img_alt:"A lion"
        },
        {
        img_src:"baseball.jpg",
        img_alt:"baseball"
        },
        {
        img_src:"baseball2.jpg",
        img_alt:"baseball2"
        }
    ];
    Template.images.helpers({images:img_data});
}

if (Meteor.isServer) {

    console.log("I am the server");
}
