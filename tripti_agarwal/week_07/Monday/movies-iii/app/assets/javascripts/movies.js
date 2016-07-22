$(document).ready(function() {
  $('#search').on('click',function(){
    var movieTitle = $('#movie_title').val();
    console.log(movieTitle);
    var movieUrl = "http://omdbapi.com/?s="+movieTitle;
    var xhr = new XMLHttpRequest();
    xhr.open('GET',movieUrl);

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) { return; }
      var info = JSON.parse(xhr.responseText);
      $('#poster').html('');
      if (parseInt(info.totalResults) > 1) {
        for (var i = 0; i < info.Search.length; i++) {
            console.log(info.Search[i]);
            title = info.Search[i].Title;
            posterUrl = info.Search[i].Poster;
            if ( posterUrl === 'N/A') {
              var $movieLink = $("<a>").attr("href", posterUrl);
              $('#poster').append($movieLink);
               $('#poster').append("<br>");
               $($movieLink).text(title);
            } else {
              var $moviePoster = $("<img>").attr("src", posterUrl);
              $('#poster').append($moviePoster);
              // $('#poster_title').append("<br>");
              // $($movieLink).text(title);
              //  $('#poster>a')[i].text(title);
              // $('#poster').html('<a href='+'"'+posterUrl+'"'+' >'+title+'</a>');
            }

        }
      } else if (parseInt(info.totalResults) === 1){
        var movieUrl = "http://omdbapi.com/?t="+movieTitle;

         console.log(movieUrl);
        var xhr_single = new XMLHttpRequest();
        xhr.open('GET',movieUrl);


        xhr.onreadystatechange = function() {
          if (xhr.readyState != 4) {
            return;
          }
          var info = JSON.parse(xhr.responseText);
          var $moviePoster = $("<img>").attr("src", info.Poster);
          $('#poster').append($moviePoster);

        };

      } else {
        $('#poster').html("There are no movies matching this search");
      }
      xhr.send();
    };

  });
});

$(document).ready(function() {
  $('form').on('submit',function(e) {
    e.preventDefault();
  });
});
