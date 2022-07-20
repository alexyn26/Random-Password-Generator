// Assignment code here
//possible characters
var generateBtn = document.querySelector("#generate");


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var generatePassword = function () {


  var passwordLength = window.prompt("How many characters do you want your password to be? Choose between 8 and 128 characters.");
  while (passwordLength === null){

      window.alert("A password will not be generated, thank you.");
      return;    
  }
  if (passwordLength <= 7 && passwordLength != 0) {
    window.alert("Your password is too short.");
    passwordLength = window.prompt("How many characters do you want your password to be? Choose between 8 and 128 characters.");
  }
  else if (passwordLength > 128) {
    window.alert("Your password is too long.");
    passwordLength = window.prompt("How many characters do you want your password to be? Choose between 8 and 128 characters.");
  }
  else if (passwordLength == 0) {
    window.alert("You must choose how many characters you want your password to be.")
    passwordLength = window.prompt("How many characters do you want your password to be? Choose between 8 and 128 characters.");

  }
  else {
    window.alert("Your password will be " + passwordLength + " characters in length.");
  }
 

  var includeUpperCase = window.confirm("Would you like upper case letters in your password? Click Ok to confirm or Cancel to deny.");
  if (includeUpperCase == true) {
    window.alert("Your password will contatin upper case characters.");
  }
  else {
    window.alert("You password will NOT contain uppercase characters.");
  }
  var includeLowerCase = window.confirm("Would you like lowercase letters in your password? Click Ok to confirm or Cancel to deny.");
  if (includeLowerCase == true) {
    window.alert("Your password will contain lowercase characters.")
  }
  else {
    window.alert("Your password will NOT contain lowercase characters.");

  }
  var includeNumbers = window.confirm("Would you like numbers in your password? Click Ok to confirm or Cancel to deny.");
  if (includeNumbers == true) {
    window.alert("Your password will contain numbers.")
  }
  else {
    window.alert("Your password will NOT contain numbers.");

  }
  var includeSpecial = window.confirm("Would you like special characters in your password? Click Ok to confirm or Cancel to deny.");
  if (includeSpecial == true) {
    window.alert("Your password will contain special characters.")
  }
  else {
    window.alert("Your password will NOT contain special characters.");

  }

  //if user denies all types of characters

  if (includeUpperCase == false && includeLowerCase == false && includeNumbers == false && includeSpecial == false) {
    window.alert("You must choose at least one type of character.");
    window.generatePassword();
  }






  //create password
  var passwordCreation = []
  //if all are selected (1)
  if (includeUpperCase && includeLowerCase && includeNumbers && includeSpecial) {
    passwordCreation = passwordCreation.concat(upperCase);
    passwordCreation = passwordCreation.concat(lowerCase);
    passwordCreation = passwordCreation.concat(numbers);
    passwordCreation = passwordCreation.concat(special);
  }
  //if all but special characters is selected(2)
  else if (includeUpperCase && includeLowerCase && includeNumbers && includeSpecial == false) {
    passwordCreation = passwordCreation.concat(upperCase);
    passwordCreation = passwordCreation.concat(lowerCase);
    passwordCreation = passwordCreation.concat(numbers);

  }
  //if all except numbers and special characters are selected(3)
  else if (includeUpperCase && includeLowerCase && includeNumber == false && includeSpecial == false) {
    passwordCreation = passwordCreation.concat(upperCase);
    passwordCreation = passwordCreation.concat(lowerCase);

  }
  //if only upper case is selected(4)
  else if (includeUpperCase && includeLowerCase == false && includeNumbers == false && includeSpecial == false) {
    passwordCreation = passwordCreation.concat(upperCase);
  }
  //if all except uppercase is selected(5)
  else if (includeUpperCase == false && includeLowerCase && includeNumbers && includeSpecial) {
    passwordCreation = passwordCreation.concat(lowerCase);
    passwordCreation = passwordCreation.concat(numbers);
    passwordCreation = passwordCreation.concat(special);
  }
  //if all except lowercase is selected(6)
  else if (includeUpperCase && includeLowerCase == false && includeNumbers && includeSpecial) {
    passwordCreation = passwordCreation.concat(upperCase);
    passwordCreation = passwordCreation.concat(numbers);
    passwordCreation = passwordCreation.concat(special);
  }
  //if all except numbers is selected(7)
  else if (includeUpperCase && includeLowerCase && includeNumbers == false && includeSpecial) {
    passwordCreation = passwordCreation.concat(upperCase);
    passwordCreation = passwordCreation.concat(lowerCase);
    passwordCreation = passwordCreation.concat(special);
  }
  //if all false except special(8)
 else if (includeUpperCase == false && includeLowerCase == false && includeNumbers == false && includeSpecial) {

    passwordCreation = passwordCreation.concat(special);
  }
  //if all false except numbers(9)
  else if (includeUpperCase == false && includeLowerCase == false && includeNumbers && includeSpecial == false) {

    passwordCreation = passwordCreation.concat(numbers);

  }
  //if all false except lowercase(10)
  else if (includeUpperCase == false && includeLowerCase && includeNumbers == false && includeSpecial == false) {

    passwordCreation = passwordCreation.concat(lowerCase);

  }
  //if uppercase and numbers only(11)
  else if (includeUpperCase && includeLowerCase == false && includeNumbers && includeSpecial == false) {
    passwordCreation = passwordCreation.concat(upperCase);
    passwordCreation = passwordCreation.concat(numbers);
  }
  //if uppercase and special only(12)
  else if (includeUpperCase && includeLowerCase == false && includeNumbers == false && includeSpecial) {
    passwordCreation = passwordCreation.concat(upperCase);
    passwordCreation = passwordCreation.concat(special);
  }

  //if lower and number only (13)
  else if (includeUpperCase == false && includeLowerCase && includeNumbers && includeSpecial == false) {

    passwordCreation = passwordCreation.concat(lowerCase);
    passwordCreation = passwordCreation.concat(numbers);
  }
  //if lower and special only (14)
  else if (includeUpperCase == false && includeLowerCase && includeNumbers == false && includeSpecial) {
    passwordCreation = passwordCreation.concat(lowerCase);
    passwordCreation = passwordCreation.concat(special);
  }
  //if number and special only(15)
  else if (includeUpperCase == false && includeLowerCase == false && includeNumbers && includeSpecial) {

    passwordCreation = passwordCreation.concat(numbers);
    passwordCreation = passwordCreation.concat(special);
  }

  var passwordScramble = " "
  for (var i = 0; i < passwordLength; i++) {
    passwordScramble = passwordScramble + passwordCreation[Math.floor(Math.random() * passwordCreation.length)];
  }

  return passwordScramble;
}

// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


generateBtn.addEventListener("doubleclick", "");


