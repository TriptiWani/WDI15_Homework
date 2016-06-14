//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


//if ( character === ('a' || 'e' || 'i' || 'o' )) - WRONG
// if ( character === 'a') ||( character = 'e' )|| 'i' || 'o' ))

var vowelChecker = function ( x ) {
  var strLen = x.length;
  var vowels = ['a' , 'e' , 'i' , 'o' , 'u'];
  var flag = 0;

  if ( strLen === 1 ) {
    if (vowels.includes(x)) {
      console.log(' It is a vowel');
    } else {
        console.log(x + ' Not a vowel');
    }
  } else {
    console.log( x+ ' The input is not a single character' );
  }


  // if ( strLen === 1 ) {
  //   for ( p = 0 ; p < vowels.length ; p++) {
  //       if ( vowels[p] === x) {
  //         flag = 1;
  //         break;
  //         //console.log(' It is a vowel');
  //       }
  //   }
  //
  //   if (flag === 1) {
  //     console.log(x + ' It is a vowel');
  //   } else {
  //     console.log(x + ' Not a vowel');
  //   }
  // } else {
  //   console.log( x+ ' The input is not a single character' );
  // }
}
console.log(vowelChecker('i'));
console.log(vowelChecker('a'));
console.log(vowelChecker('e123'));
console.log(vowelChecker('p'));
