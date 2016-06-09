/*
Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".
*/

// return string.split('').reverse().join('');

var reverseString = function (str) {
var arr = [];
var str1;

for (var i = 0; i < str.length; i++) {
  arr.push(str[i]);
}
arr.reverse();
str1='';
for (var i = 0; i < arr.length; i++) {
  str1 = str1 + arr[i];}
  console.log(str1);
}


reverseString('Hello');
reverseString('Tripti');









/*
Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
*/
