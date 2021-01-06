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
  // var passwordChar = generateChar()
    console.log(passwordLength)
  return passwordLength
} 
// I added isNaN to the if statement so letters couldn't be used to bypass the password length section
 function generateLength() {
  var myLength = prompt("How long do you want your password to be, between 8 and 128 characters?")
  if (myLength < 8 || myLength > 128 || isNaN(myLength)) {
     alert("Sorry, your password is invalid");
     return generateLength()
  } else {
    return generateChar(myLength)
  }
  
}
// updated generateChar with confirms that captures the users info and if statements for the users selections.

 function generateChar(length) {
  
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "123456789";
  var symbols = "!@#$*?";
  var userChoice = "";
  var password1 = "";
  var userSelectUpper = confirm("Do you want uppercase characters");
  var userSelectLower =confirm("Do you want lowercase characters");
  var userSelectNumber = confirm("Do you want numbers");
  var userSelectSymbol =confirm("Do you want symbols");
  
  if (userSelectUpper === true) {
      userChoice += upperCase
  }
  if (userSelectLower === true) {
    userChoice += lowerCase
  }
  if (userSelectNumber === true) {
    userChoice += number
  }
  if (userSelectSymbol === true) {
    userChoice += symbols
  }
                  // I  added a for loop to make the password random
  
  for (i = 0; i < length; i++) {
    password1 += userChoice[Math.floor(Math.random() * userChoice.length)]
  }
    
    return password1
 }