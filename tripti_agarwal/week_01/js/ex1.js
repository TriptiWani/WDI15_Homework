/*
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums and
multiplies (respectively) all the numbers in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

var maxOfTwoNumbers = function ( num1 , num2 ){
  if ( num1 > num2){
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(5,15));
console.log(maxOfTwoNumbers(60,6));
