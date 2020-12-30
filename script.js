// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password
}

function generatePassword() {
  var passwordLength = generateLength()
  var passwordChar = generateChar()
  
  return "Hello World"
}
 function generateLength() {
  var myLength = prompt("How long do you want your password to be, between 8 and 128 characters?")
  if (myLength < 8 || myLength > 128) {
     alert("Sorry, your password is invalid");
     return generateLength()
  } else {
    return myLength
  }
  
}
 

 function generateChar() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
  return chars
 }