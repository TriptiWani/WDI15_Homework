$(document).ready(function(){
  // alert('Welcome to Hangman');
  var wordList = ['Spectre','Everest','Sicario','Insurgent'];
  //['CaptainAmerica','Hulk','IronMan','AntMan'];

  var word = _.sample(wordList).toUpperCase();
  console.log(word);
  var guessedLetters = [];
  var correctlyGuessedLetters = [];
  var hangmanCount = 0;
  var allGuessedLetters = [];

  var createGuessGrid = function(word){
    _(word.length).times( function(n){
      $div = $('<div id="letter'+ n +'"></div>');
      // console.log($div);
      $div.addClass('letter bg');
      $div.appendTo('#guessIt');
    });
  };

  var findAllOcurrences = function(list,letter){
    var indexes = [], i;
    for(i = 0; i < list.length; i++)
        if (list[i] === letter)
            indexes.push(i);
    return indexes;
  };


  var wordGuesser = function(l){
    $('#myInput').val('');
    var wordToGuess = _.toArray(word);
    var occurredAt = findAllOcurrences(wordToGuess,l);
    if (occurredAt.length > 0){
      _(occurredAt.length).times( function(n){
        correctlyGuessedLetters[occurredAt[n]] = l;
        $('#letter'+occurredAt[n]).removeClass('bg');
        $('#letter'+occurredAt[n]).html(l);
      });
    } else {
      // console.log('No',l);
      alert('Its incorrect guess');
      hangmanCount++;
      if (hangmanCount === 8){
        $('#hangman').addClass('hangman');
        $('body').addClass('blood');
      }
    }
    populateDiv();

    // $('#guessword').html('Word:'+word);
    // $('#allGuessedLetters').html('All Guessed Letters:'+ allGuessedLetters);
    // $('#correctlyGuessedLetters').html('Only Correct guesses:' + correctlyGuessedLetters);
    // $('#hangmanCount').html('Hangman Count:' + hangmanCount);
  };

  var userInput = function() {
    // console.log(word);
    createGuessGrid(word);
    if (_.isEqual(_.toArray(word),correctlyGuessedLetters)) {
      alert('You won');
    } else {
      var guessedLetter = prompt('Guess the letter');
      var letter = guessedLetter.toLowerCase();
      if ( letter.length != 1){
        alert('Please enter only one letter at a time');
      } else {
        allGuessedLetters.push(letter);
        wordGuesser(letter);
      }
    }
  };
  createGuessGrid(word);
  $('#myInput').on('change',function(){
    // console.log('changed');
    var letter = ($(this).val()).toUpperCase();
    // console.log(letter);
    if (( letter.length != 1) && (letter !== '')){
      alert('Please enter only one letter at a time');
    } else {
      if (_(allGuessedLetters).includes(letter) ) {
        alert('You have already guessed this letter..Try a new one');
      } else {
        allGuessedLetters.push(letter);
        wordGuesser(letter);
      }
    }
  });

  $('#reset').on('click', function(){
    $('body').removeClass('blood');
    resertLetters();
  });
  $('#giveup').on('click', function(){
    giveUpGame(word);
  });
  $('#hint').on('click', function(){
    provideHint();
  });


  var resertLetters = function(){
    if (hangmanCount < 8) {
      $('.letter').addClass('bg');
      $('.letter').html('');
      correctlyGuessedLetters = [];
      hangmanCount = 0;
      allGuessedLetters = [];
      populateDiv();
    }
  };

  var giveUpGame = function(word){
    console.log(word);
    _(word.length).times(function(n){
      console.log(n);
      // console.log(n,word[n]);
      $div = $('#letter'+n);
      $div.removeClass('bg');
      $div.html(word[n]);
    });
  };

  var populateDiv = function() {
    // $('#guessword').html('Word:'+word);
    $('#allGuessedLetters').html('All Guessed Letters:'+ allGuessedLetters);
    // $('#correctlyGuessedLetters').html('Only Correct guesses:' + correctlyGuessedLetters);
    $('#hangmanCount').html('Lives:' + (8-hangmanCount));
  };

  var provideHint = function() {
    if (hangmanCount < 8){
      completeWord = (_.toArray(word));
      wordGuesser(_.sample(_.difference(completeWord,correctlyGuessedLetters)));
    }
  };

});
