// Assignment code here


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

function writePassword() {
  var passwordLength = prompt ("Please enter a password between 8-128 characters");
    if (passwordLength < 8 || passwordLength > 128) {
      return alert ("Incorrect password length!");
      passwordLength = null;
    }

    console.log("The password length is: " + passwordLength);
    alert ("The password length is set to: " + passwordLength);


}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);