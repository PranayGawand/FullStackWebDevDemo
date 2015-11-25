
    Parse.initialize("FC80QKIeYFWKN22kxG7mAjkiMFREs6V8tHOnyR1G", "BBNAwNADfWNRaWKQgPDdGvazLznuXcGKLn7KbVhi");
    
    var TestObject = Parse.Object.extend("User");
    var testObject = new TestObject();
      testObject.save({Warrior: "ABC"}, {
      success: function(object) {
        $(".success").show();
      },
      error: function(model, error) {
        $(".error").show();
      }
    });