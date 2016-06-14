/*The Calculator
Part 1

Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.

var a = 5.00000;
var b = parseFloat(a.toFixed(2));
b;
 //=> 5

*/

// function that will take one argument (a number), square that number, and return the result.
//It should also log a string like "The result of squaring the number 3 is 9."
var squareNumber = function(num){
  var sq = num * num;
  var message = 'The result of squaring the number '+ num +' is '+sq.toFixed(2);
  console.log(message);
  return sq.toFixed(2);
};
//function that will take one argument (a number), divide it by 2, and return the result.
//It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(num){
  var numHalf = num/2;
  var message = 'Half of  '+ num +' is '+numHalf.toFixed(2);
  console.log(message);
  return numHalf.toFixed(2);
};

//function that will take two numbers, figure out what percent the first number represents of the second number, and return the result.
//It should also log a string like "2 is 50% of 4."
var percentOf = function(num1,num2){
  var percentage = (num2/num1)*100;

  //var percent = percentage.toFixed(2);
  var percent = +(Math.round(percentage + "e+2")  + "e-2");
  var message = num2 +' is '+percent+'% of '+num1;
  console.log(message);
return percent;
  //return percent.toFixed(2);
};

//function that will take one argument (the radius), calculate the area based on that, and return the result.
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
var areaOfCircle = function(radius){
  //var rad = radius.toFixed(2);
  var rad = +(Math.round(radius + "e+2")  + "e-2");
  var area = rad * rad * Math.PI;
  var message = 'The area for a circle with radius ' + rad +' is '+area.toFixed(2);
  console.log(message);
  return area.toFixed(2);
};

var sqNum = squareNumber(5.53);
var halfNum = halfNumber(10);
var percentage = percentOf(6,3);
var area = areaOfCircle(10);

console.log(sqNum);
console.log(halfNum);
console.log(percentage);
console.log(area);


/* Part 2

Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/


var Calculator = function(num){
  var half = halfNumber(num);
  var sqNum = squareNumber(half);
  var area = areaOfCircle(sqNum);
  var percent = percentOf(area,sqNum);

console.log(half);
console.log(sqNum);
console.log(area);
console.log(percent);
}

Calculator(2);
