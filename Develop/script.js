// Assignment code here
var numOfChars;
var includeLower;
var includeUpper;
var includeSpecial;
var includeNums;
var tempPassword;

//var passwordCriteria = [numOfChars, includeLower, includeUpper, includeSpecial, includeNums];

var lowerList = "abcdefghijklmnopqrstuvwxyz";
var upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialList = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numsList = "0123456789";


//create prompts for password criteria
function generatePassword() {
  tempPassword = "";
  buildCriteria();

  //Checks that at least one of the criterias were used.
  if(includeLower === false && includeSpecial === false && includeSpecial === false && includeNums === false) {
    window.alert("You must incluse at least one of the following: numerics, upper-case characters, lower-case characters, special characters.");
    buildCriteria();
  };
  //generate the password.
  if(includeLower) {
    tempPassword += lowerList[Math.floor(Math.random() * (lowerList.length - 1))];
  }
  if(includeSpecial) {
    tempPassword += specialList[Math.floor(Math.random() * (specialList.length - 1))];
  }
  if(includeUpper) {
    tempPassword += upperList[Math.floor(Math.random() * (upperList.length - 1))];
  }
  if(includeNums) {
    tempPassword += numsList[Math.floor(Math.random() * (numsList.length - 1))];
  }

  passwordHelper();
  randomize();
  return tempPassword;
}

//determines users perferences for password.
function buildCriteria() {
      var length = window.prompt("How many characters long, type a number '8'-'128'");
      if(length >= 8 && length <= 128){
        window.alert("Your password will be " + length + " characters long.")
        numOfChars = length;
      }else{
        checkLength(length);
      }
      
      includeLower = window.confirm("Would you like to include lower-case characters?");
      lowercase(includeLower);
    
      includeUpper = window.confirm("Would you like to include Upper-case Characters?");
      uppercase(includeUpper);

      includeSpecial = window.confirm("Would you like to include special characters?");
      specialChars(includeSpecial);

      includeNums = window.confirm("Would you like to include numeric characters?");
      numericChars(includeNums);
}

//checks the length of character is in the valid window.
function checkLength(length){
 if(length > 128){
   window.alert("you have requested too many characters, password can only be 8-128 characters long");
   buildCriteria();
 } else if (length < 8){
   window.alert("you have requested too few charactres, password can only be 8-128 charactrs long");
   buildCriteria();
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

//checks and re-confirms if the user wants numeric chars.
function numericChars(){
  if(includeNums) {
    window.alert("Your password will include numeric characters.");
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

//helps create rest of password based of length desired
function passwordHelper() {

  while (tempPassword.length < parseInt(numOfChars)) {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        if(includeLower) {
          tempPassword += lowerList[Math.floor(Math.random() * (lowerList.length - 1))];
        }
        break;
      case 1:  
        if(includeSpecial) {
          tempPassword += specialList[Math.floor(Math.random() * (specialList.length - 1))];
        }
        break;
      case 2: 
        if(includeUpper) {
          tempPassword += upperList[Math.floor(Math.random() * (upperList.length - 1))];
        }
        break;
      case 3:  
        if(includeNums) {
          tempPassword += numsList[Math.floor(Math.random() * (numsList.length - 1))];
          console.log(tempPassword);
        }
        break;
    }

  }
}

//after creating the string this function will randomize 
function randomize() {
  for(i=0;i<50;i++){
    var rand1 = Math.floor(Math.random() * (numOfChars - 1));
    var rand2 = Math.floor(Math.random() * (numOfChars - 1));
    var tempChar = tempPassword[rand2];
    tempPassword[rand2] = tempPassword[rand1];
    tempPassword[rand1] = tempChar;
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


