
function Validate() {
var username = document.getElementById('Username');
var addr = document.getElementById('Password');
var email = document.getElementById('Email');
// To check empty form fields.
if (Username.value.length == 0) {
document.getElementById('Username').innerText = "* All fields are mandatory *"; 
Username.focus();
return false;
}
// Check each input in the order that it appears in the form.
if (Username(Username, "* For your name please use alphabets only *")) {
if (Email(Email, "* Please enter a valid email address *")) {
return true;
}
}
}
return false;
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function Validate(inputtext, alertMsg) {
var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
if (inputtext.value.match(emailExp)) {
return true;
} else {
document.getElementById('Email').innerText = alertMsg; // This segment displays the validation rule for email.
inputtext.focus();
return false;
}
}


