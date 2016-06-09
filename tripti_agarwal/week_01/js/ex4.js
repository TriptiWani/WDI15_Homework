/*
Define a function sumArray and a function multiplyArray that sums and
multiplies (respectively) all the numbers in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

var numArray = [1,2,3,4];
var sum = 0;
var sumArray = function(a) {
  for (var i = 0; i < a.length; i++) {
    //console.log(a[i]);
    sum = sum + a[i];
    //console.log(sum);
  }
  return sum;
};

var product = 1;
var multiplyArray= function(a) {
  for (var i = 0; i < a.length; i++) {
    //console.log(a[i]);
    product = product * a[i];
    //console.log(sum);
  }
  return product;
};

console.log(sumArray(numArray));
console.log(multiplyArray(numArray));
