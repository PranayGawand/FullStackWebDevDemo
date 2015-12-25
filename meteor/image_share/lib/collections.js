// this is image_share.js
Images = new Mongo.Collection("images");


Images.allow({
    insert:function(user_id, doc) {
        console.log("Testing insertion");
        if (Meteor.user()) {
            console.log(doc);
            // force the image to be owned by the user
            doc.createBy = user_id;
            if (user_id != doc.createBy){
                return false;
            } else {
                return true;
            } 
        } else {
            return false;
        }
    },
    remove:function(user_id, doc) {
        console.log("Testing removal")
        return true;
    }
    
    
})