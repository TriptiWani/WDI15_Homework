/* DrEvil

Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)'
at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)

*/

var DrEvil = function(num){
  if(num = 1000000){
    var message = num + ' dollars (pinky)';
    return message;
  }
  else{
    var message = num+' dollars';
    return message;
  }
}

console.log(DrEvil(10));
console.log(DrEvil(1000000));

/*
MixUp

Create a function called mixUp. It should take in two strings, and
return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each.
You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

var mixUp = function(str1,str2){

  var str1slice1 = str1.slice(0,2); // extracts first 2 chars of str1
  var str1slice2 = str1.slice(2,str1.length); // extracts all remaining chars of str1

  var str2slice1 = str2.slice(0,2); // extracts first 2 chars of str1
  var str2slice2 = str2.slice(2,str2.length); // extracts all remaining chars of str1

  var strOut = str1.replace(str1slice1,str2slice1)+ ' ' + str2.replace(str2slice1,str1slice1)
  //var strOut = str2slice1 + str1slice2 + ' ' + str1slice1 +str2slice2 // swaaping and cotcatenating the new strings
  console.log(strOut);
  return strOut;  // return the concatenation of two strings
}

mixUp('mix','pod');
mixUp('dog', 'dinner');




/* FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all occurences of its
first character have been replaced with '*', except for the first character itself.
You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
"hotdogs".replace('o', '*');
"hotdogs".replace(/o/g, '*');
var match = new RegExp(first, "gi");
var newStr = str.replace(match, '*');

*/

var fixStart = function(str){
  var firstChar = str.slice(0,1); //first character
//  var repStr = (str.substr(1,str.length)).replace(firstChar, '*');
  var match = new RegExp(firstChar,"gi"); //creating the regex with global
  var repStr = (str.substr(1,str.length)).replace(match,'*'); //replacing first char with *

  var newStr = firstChar + repStr; //concatenate first char with new replaced string
  console.log(newStr);

}

fixStart('babble');
fixStart('Tripti');
fixStart('triptitripti');

/*
Verbing

Create a function called verbing. It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end,
unless it already ends in 'ing', in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.
 For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
  */

var verbing = function(str){
  var strlen = str.length;

  if(strlen >= 3){
    var strEnd3 = str.slice(-3); //last 3 chars
    if (strEnd3 !== 'ing'){
      var str1 = str+'ing'; //adding ing
    //  console.log(str1);
    }
    else{
      var str1 = str+'ly'; //adding ly since it has ing
    //  console.log(str1);
    }
  }
  else {
    str1=str;
  //  console.log(str); // leave it unchanged  
  }
  console.log(str1);
}

verbing('swim');
verbing('swimming');
verbing('go');


/*Not Bad

Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
  */


  var notBad = function (str){
    var indexOfNot = str.search('not');
    var indexOfBad = str.search('bad');

    if((indexOfBad !== -1) && (indexOfNot !== -1) && (indexOfBad > indexOfNot)){
      var newStr = str.slice(0,indexOfNot);
      var lastStr = str.slice(indexOfBad+3,str.length);
      var finalStr = newStr+ 'good' + lastStr;
      //use replace function to build new string
      console.log(finalStr);
    }
    else{
    console.log(str);
    }
  }
notBad('This dinner is not that bad!');
notBad('This movie is not so bad!'); //: 'This movie is good!'
notBad('This dinner is bad!')   //: 'This dinner is bad!'
