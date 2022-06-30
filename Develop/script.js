// Assignment code here

function generatePassword() {
  var chars = ""; //Final character selection for password generator
  console.log("Character string is " + chars);

  //Checks for password length
  var passwordLength = prompt("Please enter a password length between 8-128 characters");
  if (isNaN(passwordLength)){
    alert("Password length can only be a numeric value, try again");
    return;
  }

  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect password length!");
    passwordLength = null;
    return;
  }

  console.log("The password length is: " + passwordLength);
  alert("The password length is set to: " + passwordLength);

  // Checks for lower
  var lower = "";
  var l1 = prompt("Would like to include lower-case letters", "yes or no");
  
  if (l1 === "yes") {
    lower = "abcdefghijklmnopqrstuvwxyz";
  } 
  else if (l1 === "no") {
    lower = "";
  } 
  else {
    alert("Invalid Selection, please try again");
  return;
  }

  chars = lower;
  console.log("Character string is " + chars);

  //Checks for upper
  var upper = "";
  var u1 = prompt("Would like to include upper-case letters", "yes or no");
  
  if (u1 === "yes") {
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  else if (u1 === "no") {
    upper = "";
  } 
  else {
    alert("Invalid Selection, please try again");
    return;
  }
  
  chars = lower + upper;
  console.log("Character string is " + chars);

  //Checks for numbers
  var numbers = "";
  var n1 = prompt("Would like to include numbers in your password", "yes or no");

  if (n1 === "yes") {
    numbers = "1234567890";
  } 
  else if (n1 === "no") {
    numbers = "";
  } 
  else {
    alert("Invalid Selection, please try again");
    return;
  }

  chars = lower + upper + numbers;
  console.log("Character string is " + chars);

  //Checks if the user wants to add special characters
  var special = "";
  var s1 = prompt("Would like to include special characters in this password?", "yes or no");

  if (s1 === "yes") {
    special = "!@#$%^&*()";
  } 
  else if (s1 === "no") {
    special = "";
  } 
  else {
    alert("Invalid Selection, please try again");
    return;
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
