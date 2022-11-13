// Assignment code here
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharacters = "1234567890";
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

let passwordLength; 
let includeUppercase; 
let includeLowercase;
let includeNumbers; 
let includeSpecial; 
let selectedCharacters = "";

// Write password to the #password input
function writePassword() {
  selectedCharacters = "";
    confirmLength();
    confirmCharacters();
    console.log(selectedCharacters);
    
    var password = generatePassword();
    
    passwordText.value = password;
}

// Confirm character prompts and add to selected characters
function confirmCharacters() {
  includeLowercase = confirm("Would you like to include lowercase letters?");
  if(includeLowercase) {
    selectedCharacters += lowercaseCharacters
  }
  includeUppercase = confirm("Would you like to include uppercase letters?");
  if(includeUppercase) {
    selectedCharacters += uppercaseCharacters
  }
  includeNumbers = confirm("Would you like to include numbers?");
  if(includeNumbers) {
    selectedCharacters += numberCharacters
  }
  includeSpecial = confirm("Would you like to include special characters?");
  if(includeSpecial) {
    selectedCharacters += specialCharacters
  }

  let includeCharacters = includeLowercase + includeUppercase + includeNumbers + includeSpecial; 

  if(includeCharacters<1){
    alert("At least one character type should be selected!");
    confirmCharacters();
  }
}

// Created random index of selected characters and return it
function generatePassword() {
  let passwordString = "";
  for (let i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * selectedCharacters.length);
      passwordString += selectedCharacters[index];
  }
  return passwordString; 
  console.log(passwordLength);
}

// Prompt length and if requirement is not met recurse the function for user to input required number
function confirmLength() {
  passwordLength = prompt("Choose a length of at least 8 characters and no more than 128!");

  if(isNaN(passwordLength) || passwordLength<8 || passwordLength>128){
    passwordLength = null;
    confirmLength();
  } 
}
  
// Event listener to generate button
generateBtn.addEventListener("click", writePassword);