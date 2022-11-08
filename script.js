// Assignment code here
const passwordEl = document.getElementById('password'); 
const lengthEl = document.getElementById('length'); 
const lowercaseEl = document.getElementById('lowercase'); 
const uppercaseEl = document.getElementById('uppercase'); 
const numbersEl = document.getElementById('numbers'); 
const specialEl = document.getElementById('special'); 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


const uppercaseCharCodes = arrayLowToHigh (65, 90);
const lowercaseCharCodes = arrayLowToHigh (97, 122);
const numbersCharCodes = arrayLowToHigh (48, 57);
const specialCharCodes = arrayLowToHigh (33, 47).concat (arrayLowToHigh (58, 64)).concat (arrayLowToHigh (91, 96)).concat (arrayLowToHigh (123, 126));

// Generate event listen
generateBtn.addEventListener("click", () => {
  // the + is to parse the length value from string to number
  const length = +lengthEl.value; 
  const includeLowercase = lowercaseEl.checked;
  const includeUppercase = uppercaseEl.checked; 
  const includeNumbers = numbersEl.checked;  
  const includeSpecial= specialEl.checked; 


  passwordEl.innerText = generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSpecial, length);
});

// Generate password function


function generatePassword (lowercase, uppercase, numbers, special, length) {

  let generatePassword = '';

  const clicked = lowercase + uppercase + numbers + special; 

  // console.log ('clicked:', clicked); 

  const typesArray = [{ lowercase }, { uppercase }, { numbers }, { special }];

  // console.log ('typesArray:', typesArray)

  if (clicked === 0) {
    return window.alert("Must select atleast one character type!");
  }



  console.log ('Button clicked!'); 
  let charCodes = lowercaseCharCodes 
  if (uppercase)
  console.log (lowercaseCharCodes)
  return "Generated Password";
}

function arrayLowToHigh (low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
