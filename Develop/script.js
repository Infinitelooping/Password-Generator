// Assignment code here
var numOfChars;
var includeLower;
var includeUpper;
var includeSpecial;
var includeNums;

var passwordCriteria = [numOfChars, includeLower, includeUpper, includeSpecial, includeNums];

var lowerList = "abcdefghijklmnopqrstuvwxyz";
var upperlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialList = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numsList = "0123456789";


//create prompts for password criteria
function generatePassword() {
  buildCriteria();

  for(i=1;i<=numOfChars;i++) {

  }
}

function buildCriteria() {
  for(i=0; i<passwordCriteria.length;i++){
    if (i === 0){
      var length = window.prompt("How many characters long, type a number '8'-'128'");
      if(length > 8 && length < 128){
        window.alert("Your password will be " + length + " characters long.")
        passwordCriteria[i] = length;
      }else{
        checkLength(length);
      }
      
    }else if (i === 1){
      includeLower = window.confirm("Would you like to include lower-case characters?");
      lowercase(includeLower);
      passwordCriteria[i] = includeLower;
    }else if(i === 2){
      includeUpper = window.confirm("Would you like to include Upper-case Characters?");
      uppercase(includeUpper);
      passwordCriteria[i] = includeUpper;
    }else if(i === 3){
      includeSpecial = window.confirm("Would you like to include special characters?");
      specialChars(includeSpecial);
      passwordCriteria[i] = includeSpecial;
    }else if(i === 4){
      includeNums = window.confirm("Would you like to include numeric characters?");
    }
  }
}

//checks the length of character is in the valid window.
function checkLength(length){
 if(length > 128){
   window.alert("you have requested too many characters, password can only be 8-128 characters long");
   buildCriteria();
 } else if (length < 8){
   window.alert("you have requested too few charactres, password can only be 8-128 charactrs long");
   buildCriteria();
 }else{
   return length;
 }
}

//checks and re-confirms if the user wants lowercase chars.
function lowercase(includeLower){
  if(includeLower){
    window.alert("Your password will include lower-case characters.")
    return true;
  } else {
    return finalConfirm();
  }
}

//checks and re-confirms if the user wants uppercase chars.
function uppercase(){
  if(includeUpper){
    window.alert("Your password will include upper-case characters.")
    return true;
  } else {
    return finalConfirm();
  }
}

//checks and re-confirms if the user wants special chars.
function specialChars(){
  if(includeSpecial){
    window.alert("Your password will include special characters.")
    return true;
  } else {
    return finalConfirm();
  }
}

//does final confirmation.
function finalConfirm() {
  var youSure = window.confirm("Confirming, means you desire lower security, cancel to increase secruity");
  if (youSure){
    return false;
  }else{
    window.alert("You have opted to have higher security! Congrats!");
    return true;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


