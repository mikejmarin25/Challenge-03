// Assignment code here

function generatePassword() {
  var chars = ""; //Final character selection for password generator
  console.log("Character string is " + chars);

  //Checks for password length
  var passwordLength = prompt(
    "Please enter a password between 8-128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Incorrect password length!");
    passwordLength = null;
  }
  console.log("The password length is: " + passwordLength);
  alert("The password length is set to: " + passwordLength);

  // Checks for lower
  var lower = "";
  var l1 = prompt("Would like to include lower-case letters", "yes or no");
  if (l1 == "yes") {
    lower = "abcdefghijklmnopqrstuvwxyz";
  }
  if (l1 == "no") {
    lower = "";
  }
  chars = lower;
  console.log("Character string is " + chars);

  //Checks for upper
  var upper = "";
  var u1 = prompt("Would like to include upper-case letters", "yes or no");
  if (u1 == "yes") {
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (u1 == "no") {
    upper = "";
  }
  chars = lower + upper;
  console.log("Character string is " + chars);

  //Checks for numbers
  var numbers = "";
  var n1 = prompt("Would like to include numbers in your password", "yes or no");
  if (n1 == "yes") {
    numbers = "1234567890";
  }
  if (n1 == "no") {
    numbers = "";
  }
  chars = lower + upper + numbers;
  console.log("Character string is " + chars);

  //Checks if the user wants to add special characters
  var special = "";
  var s1 = prompt(
    "Would like to include special characters in this password?",
    "yes or no"
  );
  if (s1 == "yes") {
    special = "!@#$%^&*()";
  }
  if (s1 == "no") {
    special = "";
  }
  chars = lower + upper + numbers + special;
  console.log("Character string is " + chars);

  //Password Generator
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}
