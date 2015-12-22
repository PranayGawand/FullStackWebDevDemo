Images = new Mongo.Collection("images");
console.log(Images.find().count())


if (Meteor.isClient) {

    // helpers only accept the object in this way
    Template.images.helpers({images:Images.find({}, {sort:{createdOn:-1, rating:-1}})
                            
                            });
    
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
            
            // for readablity, we set two var for rating and image_id
            var rating = $(event.currentTarget).data("userrating");
            console.log(rating);
            var image_id = this.data_id;
            console.log(image_id);
            Images.update({_id:image_id},{$set: {rating:rating}});
        },
        'click .js-show-me-modal':function(event){
            $("#image_form_modal").modal('show')
            
            
        }
    });
    
    Template.image_add_form.events({
        'submit .js-add-image':function(event){
            var img_src;
            var img_alt;
            img_src = event.target.img_src.value;
            img_alt = event.target.img_alt.value;
            console.log(img_src + ": " + img_alt);
            
            Images.insert({
                img_src:img_src,
                img_alt:img_alt,
                createdOn: new Date()
        
            });
            $("#image_add_form").modal('hide');
            return false;
        }
        
        
        
    });
    
}

if (Meteor.isServer) {
    console.log(Images.find().count())
    console.log("I am the server");
}
