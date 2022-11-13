// Assignment code here
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");


const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharacters = "1234567890";
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


let passwordLength 
let includeUppercase; 
let includeLowercase;
let includeNumbers; 
let includeSpecial; 

// Write password to the #password input
function writePassword() {
    confirmLength();
    confirmCharacters();
    
    var password = generatePassword();
    
    // passwordText.value = password;
}

function confirmCharacters() {
  includeLowercase = confirm("Would you like to include lowercase letters?");
  includeUppercase = confirm("Would you like to include uppercase letters?");
  includeNumbers = confirm("Would you like to include numbers?");
  includeSpecial = confirm("Would you like to include special characters?");
  let includeCharacters = includeLowercase + includeUppercase + includeNumbers + includeSpecial; 

  if(includeCharacters<1){
    alert("At least one character type should be selected!");
    confirmCharacters();
  }
}

function generatePassword() {
  console.log(passwordLength);
}

function confirmLength() {
  passwordLength = prompt("Choose a length of at least 8 characters and no more than 128!");

  if(isNaN(passwordLength) || passwordLength<8 || passwordLength>128){
    passwordLength = null;
    confirmLength();
  } 
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);