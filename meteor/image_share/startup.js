if (Meteor.isServer){
    
    Meteor.startup(function(){
        if (Images.find().count() == 0){
            Images.insert(
                {
                img_src:"lion.jpg",
                img_alt:"A lion"
                }
            );
            Images.insert(
                {
                img_src:"baseball.jpg",
                img_alt:"A baseball"
                }
            );
            Images.insert(
                {
                img_src:"baseball2.jpg",
                img_alt:"A baseball"
                }
            );
            
            
            console.log("Loaded images successfully");
        }// end if images check
     
    });
    
}