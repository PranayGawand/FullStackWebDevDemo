var $main = function() {
  $('form').submit(function() {
    var $firstName = $('#first').text();
    var $lastName = $('#last').text();;
    var $email = $('#email').text();;
    var $password = $('#password').text();;
    var $flag = true;
    if($firstName === "") {
      $(".first-name-error").val("Please enter your first name");
      $flag = false;
      console.log(1);
    }
    
    if($lastName === "") {
      $(".last-name-error").val("Please enter your last name");
      $flag = false;
    }
    
    if($email === "") {
      $(".email-error").val("Please enter your email address");
      $flag = false;
    } else if ($email === "jyang7@ualberta.ca") {
      $(".email-error").val("This email is already taken");
      $flag = false;
    }
    
    if($password === "") {
      $(".password-error").val("Please enter a password");
      $flag = false;
    } else if ($password.length <= 7) {
      $(".password-error").val("Short passwords are easy to guess");
      $flag = false;
    }
    return true;
  })
}

$(document).ready($main);