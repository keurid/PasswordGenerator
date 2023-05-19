var generateBtn = document.querySelector("#generate");

var Numbs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']; 
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function questions() {
  var Valid = false;
  do {
    var length = prompt("Password length between 8 and 128 characters");
    var askNumbers = confirm("Do you want it to include numbers?");
    var askLwrCase = confirm("Contains lower case letters?");
    var askUpprCase = confirm("Contains upper case letters?");
    var askSpecial = confirm("Contains special characters?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLwrCase: askLwrCase,
      askUpprCase: askUpprCase,
      askSpecial: askSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumbers)&&(!askLwrCase)&&(!askUpprCase)&&(!askSpecial))
    alert("Please choose one type.");
    else
    Valid = true;

  } while(!Valid);
  return responses;
}

function generatePassword() {
  var passOptions = questions();
  var possCombo = [];
  var completePass = "";



  if (passOptions.askNumbers) {
    for (var i of Numbs)
      possCombo.push(i);
  }
  if (passOptions.askLwrCase) {
    for (var i of lowerCase)
      possCombo.push(i);
  }
  if (passOptions.askUpprCase) {
    for (var i of upperCase)
      possCombo.push(i);
  }
  if (passOptions.askSpecial) {
    for (var i of special)
      possCombo.push(i);
  }

  console.log(possCombo);

  for (var i = 0; i < passOptions.length; i++) {
    completePass += possCombo[Math.floor(Math.random() * possCombo.length)];
    
  }
  console.log(completePass);

  return completePass;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);