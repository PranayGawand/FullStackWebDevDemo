Images = new Mongo.Collection("images");
console.log(Images.find().count())


if (Meteor.isClient) {

    // console.log("I am the client");

    // need use [] to enclose arrays
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
    

    // helpers only accept the object in this way
    Template.images.helpers({images:img_data});
    Template.images.events({
        'click .js-image':function(event){
            $(event.target).toggleClass("small");
        }
    });
    
}

if (Meteor.isServer) {
    console.log(Images.find().count())
    console.log("I am the server");
}
