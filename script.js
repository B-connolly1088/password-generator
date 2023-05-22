// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)

var character = 8;
var userInput = [];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"]
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var numbers = [1,2,3,4,5,6,7,8,9,0]

function writePassword() {
  userPrompts()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Assignment code here
var generatePassword = function () {
  console.log(character)
  console.log(userInput)
  var randomPass = ""
for (var i = 0; i < character; i++) {
  var randomIndex = Math.floor(Math.random() * userInput.length);
  var randomCharacter = userInput[randomIndex];
  randomPass += randomCharacter

}
  return randomPass;
}

function userPrompts() {
    //prompts how many characters user would like to add
  character = parseInt(prompt("How many Characters would you like to choose between 8-128?"));
    if (character > 128 || character < 8) {
      //If number is greater than 128 return alert: return back to character prompt
      alert("You chose an invalid character.")
    } else { alert("You have chosen " +  character + ".")
  };
  //inclusion of special characters
    var specialCharSelect = confirm("Would you like to include special characters?");
  if (specialCharSelect) {
    userInput = userInput.concat(specialChar)
  } else {
    alert("You have chosen " + specialChar + ".")
  };
  //inclusion of uppercase letters
    var upperCaseSelect = confirm("Would you like to include uppercase?")
  if (upperCaseSelect) {
    userInput = userInput.concat(upperCase)
  } else {
    alert("You have chosen " + upperCase + ".")
  };
  //inclusion of lowercase letters
    var lowerCaseSelect = confirm("Would you like to include lowercase?")
  if (lowerCaseSelect) {
    userInput = userInput.concat(lowerCase)
  } else {
    alert("You have chosen " + lowerCase + ".")
  };
  //inclusion of numbers
    var numbersSelect = confirm("Would you like to include numbers?")
  if (numbersSelect) {
    userInput = userInput.concat(numbers)
  } else {
    alert("You have chosen " + numbers + ".")
  };
  return true
};
