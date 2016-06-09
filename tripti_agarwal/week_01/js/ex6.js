/*Write a function findLongestWord that takes an array of words and returns the length of the longest one.
//
var words =[];
var filterwords = function (words, i) {
return words.filter(function(words) { return words.length > i } );
} ;

console.log(filterLongWords(words,6));

*/


var arr = ['ThisTriptiAgarwal', 'is123456789', 'June', 'September', 'month'];


var findLongestWord = function(arr1){
    var wordLen = [];
    var maxLen = 0 ;
    for (var i = 0; i < arr1.length ; i++) {
      var str = arr1[i];
      wordLen[i] = arr1[i].length;
    }
    for (var a = 1; a < wordLen.length ; a++) {
      maxLen = maxOfThree(wordLen[a],wordLen[(a-1)],maxLen);
      console.log('Length of longest word is ' + maxLen);
    }
    var LongWord = arr1[(wordLen.indexOf(maxLen))];
    console.log('Longest word in the array is ' + LongWord);
}

console.log(findLongestWord(arr));

/*
var findLongestWord = function(arr1){
    var strLen = [];
    var maxLen = 0 ;
      for (var i = 0; i < arr1.length ; i++) {
        var str = arr1[i];
    //    console.log(str);
        strLen[i] = arr1[i].length;
        //console.log(strLen);
      }
      for (var a = 1; a < strLen.length ; a++) {
//console.log(a);
console.log('Comparing ' + strLen[a] + ' and '+ strLen[a -1]);
        if ( strLen[a] > strLen[a-1])  {

          maxLen = strLen[a];
          if ( strLen[a] > maxLen)  {

            maxLen = strLen[a];
            var j = a;

          } else {
            maxLen = maxLen;
          }

        } else {
          maxLen = strLen[a-1];
          var j = (a-1);
        }
        console.log(maxLen);
      }
    //console.log(maxLen);
    //console.log(j);
    var LongWord=  (arr[j]);
    //     console.log(strLen);
  console.log(LongWord);

}
*/
