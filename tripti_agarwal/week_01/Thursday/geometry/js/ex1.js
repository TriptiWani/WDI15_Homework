/*
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};
*/

var shape = {
  length: 4,
  width: 41
};

var isSquare =  function ( polygon ) {
  if ( (polygon.length) === (polygon.width) ) {
    message = 'This is a square';
  } else {
    message = 'This is a rectangle';
  }
  return message;
}


var areaPolygon = function ( polygon ) {
  var area = (polygon.length) * (polygon.width);
  return 'Area of this polygon is '+ area;
}

var perimeterPolygon = function ( polygon ) {
    var peri = 2 * ((polygon.length) +(polygon.width));
    return 'Perimeter of this polygon is ' + peri;
}

console.log(isSquare(shape));
console.log(areaPolygon(shape));
console.log(perimeterPolygon(shape));
