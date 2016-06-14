/*Write a function findLongestWord that takes an array of words and returns the length of the longest one.
//
var words =[];
var filterwords = function (words, i) {
return words.filter(function(words) { return words.length > i } );
} ;

console.log(filterLongWords(words,6));

*/


var arr = ['ThisTriptiAgarwal', 'is123456789', 'June', 'September', 'month'];


var filterLongWords = function(arr1, num){

    return arr1.filter(function(arr1)
      { return arr1.length > num });
}

console.log(filterLongWords(arr, 4));
