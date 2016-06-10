/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

var triangle1 = {
  sideA: 5,
  sideB: 4,
  sideC: 4
};
var triangle2 = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};
var message ;
var isEquilateral = function ( shape ) {
  if (( shape.sideA === shape.sideB) && (shape.sideA === shape.sideC ) && (shape.sideB === shape.sideC )) {
    message = 'This is an Equilateral Triangle.'

  } else {
    message = 'This is NOT an Equilateral Triangle.'
  }
  return message;
}
console.log(isEquilateral(triangle1));

var isIsosceles = function ( shape ) {
  var checkIsos = (( shape.sideA === shape.sideB) || (shape.sideA === shape.sideC ) || (shape.sideB === shape.sideC ));
  var checkEqui = (( shape.sideA === shape.sideB) && (shape.sideA === shape.sideC ) && (shape.sideB === shape.sideC ));
  if ( checkIsos  && !(checkEqui) ){
    message = 'This is an Isosceles Triangle.'

  } else {
    message = 'This is not an Isosceles Triangle.'
  }
    return message;
}
console.log(isIsosceles(triangle2));

var area = function ( shape ) {
  var semiPeri = (shape.sideA + shape.sideB + shape.sideC)/2;
  var area = Math.sqrt((semiPeri) * (semiPeri - shape.sideA) * ( semiPeri - shape.sideB ) * ( semiPeri - shape.sideC ));
  return 'Area of this Triangle is ' + area;
}
console.log(area(triangle2));

/*
cos A = (b2 + c2 − a2) / 2bc
A = cos−1(0.25)
A = 75.5224...°
A = 75.5° to one decimal place.

cos B = (c2 + a2 − b2)/2ca

*/

var isObtuse = function  ( shape ) {
  var a = shape.sideA;
  var b = shape.sideB;
  var c = shape.sideC;

  var cosA = (( b * b) + (c * c)  - ( a * a )) /( 2 * b * c);
  var cosB = (( a * a) + (c * c) - ( b * b )) /( 2 * a * c);
  var angleA = (Math.acos(cosA) * 180)/ Math.PI;
  var angleB = (Math.acos(cosB) * 180)/ Math.PI;
  var angleC = 180 - (angleB + angleA);
  var angles = [ angleA , angleB , angleC ];
  console.log(angles);

  for (var i = 0; i < angles.length; i++) {
    if ( angles[i] > 90 ) {
      return ' This is an obtuse triangle';
    }
  }
}

var triangle3 = {
  sideA: 3.5,
  sideB: 5.1,
  sideC: 7.9
};

console.log( isObtuse ( triangle3));
