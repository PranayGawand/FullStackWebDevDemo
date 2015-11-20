var $main = function() {
  $('form').submit(function() {
    var $firstName = $('#first').val();
    var $lastName = $('#last').val();
    var $email = $('#email').val();
    var $password = $('#password').val();
    var $flag = true;
    if($firstName === "") {
      $(".first-name-error").text("Please enter your first name");
      $flag = false;
      console.log(1);
    }
    
    if($lastName === "") {
      $(".last-name-error").text("Please enter your last name");
      $flag = false;
    }
    
    if($email === "") {
      $(".email-error").text("Please enter your email address");
      $flag = false;
    } else if ($email === "jyang7@ualberta.ca") {
      $(".email-error").text("This email is already taken");
      $flag = false;
    }
    
    if($password === "") {
      $(".password-error").text("Please enter a password");
      $flag = false;
    } else if ($password.length <= 7) {
      $(".password-error").text("Short passwords are easy to guess");
      $flag = false;
    }
    return $flag;
  })
}

$(document).ready($main);