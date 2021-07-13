// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create function generatePassword() that generates a password based on prompts
var generatePassword = function() {
  // Generate a length for the password, make sure that it is a suitable value
  var passwordLength = prompt("How long should this password be? Must be 8 or more characters and no more than 128 characters:");
  passwordLength = Number(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("The input you entered does not fit the format, please try again!");
    return null;
  } else {
    alert("Thank you! Now we'll determine criteria. Please make sure you select at least one of the four options.");
  }

  // Develop user prompted criteria for the password
  var passwordLowerCase = confirm("Should the password use lower case letters? (Press 'Cancel' for no or 'Okay' for yes):");
  var passwordUpperCase = confirm("Should the password use upper case letters? (Press 'Cancel' for no or 'Okay' for yes):");
  var passwordNumeric = confirm("Should the password use numeric values? (Press 'Cancel' for no or 'Okay' for yes):");
  var passwordSpecialCharacter = confirm("Should the password use special characters? (Press 'Cancel' for no or 'Okay' for yes):");

  // Check to make sure at least one criteria was checked
  if (passwordLowerCase || passwordUpperCase || passwordNumeric || passwordSpecialCharacter) {
    alert("Thank you for your selection. Now generating your password. Press 'Okay' when ready.");
  } else {
    alert("You need to select at least one criteria. Please restart and try again.");
    return null;
  }

  // Create arrays of values for each criteria to act as libraries
  lowerCaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  upperCaseValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  numericValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  specialValues = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  // Use if-else statement to confirm which values to use, then combine arrays marked true

  // Use for loop to iterate over passwordLength and randomly add characters indexed from the combined array into a new password

  // Return the password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
