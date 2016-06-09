//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function ( num1 , num2 , num3 ){
  if (( num1 > num2) && ( num1 > num3 )){
    return num1;
  } else if (( num2 > num1) && ( num2 > num3 )){
    return num2;
  } else {
    return num3;
  }
}
// console.log(maxOfThree(5,15,90));
// console.log(maxOfThree(60,6,1));
// console.log(maxOfThree(2,40,9));
