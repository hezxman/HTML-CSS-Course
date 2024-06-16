// Validation code for inputs

var email = document.getElementById('email');
var password = document.getElementById('password');

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");

email.addEventListener("textInput", email_verify);
password.addEventListener("textInput", password_verify);

function validated(){
  if (!email.value.length){
      //email.style.border = "1px solid red";
      email_error.style.display = "block";
      email.focus();
      return false;
  }
  if (password.value.length < 6){
    //password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;

    } 
 }
function email_verify(){
    if (email.value.length >= 8){
        //email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function password_verify() {
    if (password.value.length >= 5){
        //password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}