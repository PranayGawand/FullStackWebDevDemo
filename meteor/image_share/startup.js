if (Meteor.isServer){
    
    Meteor.startup(function(){
        if (Images.find().count() ＝＝ ){
            Images.insert(
                {
                img_src:"lion.jpg",
                img_alt:"A lion"
                }
            );
            cosole.log("Loaded images successfully")
        }// end if images check
     
    });
    
}