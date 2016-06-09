/*
Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to guess the word
(like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed,
and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


Bonus: Make it more like Wheel of Fortune:


Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and
reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
When they guess the word, log their final reward amount.

*/

//var correctWords = ['T','R','I','P'];
var correctWords = ['F','O','X'];
var guessWords = [];
var allGuessedLetters = [];
var rewardMoney = 1;
var currentDebit = 0;
var hangMan = 0;

//This function calculates the rewards money
var rewards = function ( num ) {
  var rewardAmount;
  if ( num === 1 ) {
    amount = Math.random();
    rewardAmount = parseFloat(amount.toFixed(2));
    //console.log('Reward money' + rewardAmount);
  } else {
    amount = Math.random();
    rewardAmount = parseFloat(amount.toFixed(2));
    //console.log('Debit money' + rewardAmount);
  }
  return rewardAmount;
}


// This function converts any array to a string

var arrToString = function(arr1){
    var str ='';
    for (var i = 0; i < arr1.length ; i++) {
      str+= arr1[i];
    }
    return str;
  }

// This function compares the correct words with the words guessed till now.
var pendingLetters = function() {
  var pendingNum = (correctWords.length) - (guessWords.length);
  var strCorrectWords = arrToString(correctWords.sort());
  var strGuessedWords = arrToString(guessWords.sort());

  if (( pendingNum = 0) && (strCorrectWords === strGuessedWords)) {
    console.log('Congrations!!! You have guessed the complete word');
  } else {
    console.log('You have to guess still ' + pendingNum + 'letters to complete the correct word');
  }
}

// This function checks the letter entered with the correct word
var letterChecker = function ( x ,arr) {
  var strLen = x.length;
  var flag = 0;

  if ( strLen === 1 ) {
    for ( p = 0 ; p < arr.length ; p++) {
        if ( arr[p] === x) {
          flag = 1;
          var currentGuessedLetters = arrToString(guessWords);
          //var lettersLeftCount = pendingLetters();
          //congratulate the user if they found a new letter
          console.log('The current guessed letters ('+ currentGuessedLetters  +') and congratulations You have found a new letter');

          break;
          //console.log(' It is a vowel');
        }
    }
    return flag;
  } else {
    console.log( x+ ' The input is not a single character' );
  }
}

var letterGuessCount = function ( s ) {
    var check = letterChecker( s , allGuessedLetters);
    if ( check === 1 ) {
      console.log('This letter ' + s + ' has already been guessed');
    }
}
var guessLetter = function ( s ) {
  guessWords.push(s);
  var flag = letterChecker( s , correctWords);
  var letterAlrdyGuessed = letterChecker( s , allGuessedLetters);
  if ( letterAlrdyGuessed  === 1 ) {
    console.log('This letter ' + s + ' has already been guessed');
  } else {
  //break;
    if (flag === 1) {
      var pendingNum = (correctWords.length) - (guessWords.length);
      var currentReward = rewards(flag);
      console.log('Current Reward ' + currentReward);
      rewardMoney = (currentReward * guessWords.length) + currentReward;
      console.log('Total Reward ' + rewardMoney);
        if ( pendingNum != 0) {
          console.log('You have to guess still ' + pendingNum + ' letters to complete the correct word');
          console.log(s + ' is a correct guess of letter');
          console.log('Rewarded an amount of '+ rewardMoney + '$');
          //console.log('Congrations!!! You have guessed the complete word');
        } else {
          console.log('Congrations!!! You have guessed the complete word');
          console.log('Total reward amount is '+ rewardMoney + '$');
        }

    }
   else {
     hangMan+= 1;
     if ( hangMan <= 6) {
        console.log('This is your trial #' + hangMan);
    guessWords.pop();
    var currentDebit = rewards(flag);
    rewardMoney = rewardMoney  - currentDebit;
    console.log(s + ' Not a right guess..Try again!');
    console.log('Charged an amount of '+ rewardMoney + '$');
  } else {
   console.log('This was your trial #' + hangMan + ' You Lost');
  }
  }
}
  allGuessedLetters.push(s);
  console.log(allGuessedLetters);

//  console.log(guessWords);
}

// guessLetter('F');
// guessLetter('T');
// guessLetter('R');
// guessLetter('P');
// guessLetter('A');
// guessLetter('B');
// guessLetter('C');
// guessLetter('X');
// guessLetter('P');
// guessLetter('Q');
// guessLetter('J');
// guessLetter('L');
// guessLetter('M');
console.log(guessLetter('F'));
console.log(guessLetter('A'));
console.log(guessLetter('C'));
console.log(guessLetter('O'));
console.log(guessLetter('Xing'));
console.log(guessLetter('X'));
