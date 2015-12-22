Images = new Mongo.Collection("images");
console.log(Images.find().count())


if (Meteor.isClient) {

    // helpers only accept the object in this way
    Template.images.helpers({images:Images.find()});
    
    Template.images.events({
        'click .js-image':function(event){
            $(event.target).toggleClass("small");
        },
        'click .js-del-image':function(event){
            var image_id = this._id;
            console.log(this._id);
            $("#" + image_id).hide('slow', function(){
                Images.remove({"_id":image_id});
            });
        },
        'click .js-rate-image':function(event){
            console.log("You clicked a star");
            var rating = $(event.currentTarget).data("userrating");
            console.log(rating);
            var image_id = this.id;
            console.log(image_id);
            Images.update({_id:image_id},{$set:{rating:rating}});
        }
    });
    
}

if (Meteor.isServer) {
    console.log(Images.find().count())
    console.log("I am the server");
}
