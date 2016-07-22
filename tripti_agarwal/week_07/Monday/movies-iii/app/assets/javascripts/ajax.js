$(document).ready(function() {
  $('#search').on('click',function(){
    var movieTitle = $('#movie_title').val();
    console.log(movieTitle);
    var movieUrl = "http://omdbapi.com/?s="+movieTitle;
    $.ajax(movieUrl, {
      success:function (info) {
        $('#poster').attr('src',info.Poster);
        console.log(data);
      }
    });

    $.ajax(movieUrl).done (function (info) {
      $('#poster').attr('src',info.Poster);
      console.log(info);
    }).done( function(info) {
      $('#poster').html(info.Plot);
    }).fail( function(info) {
      console.log("Error");
    });

  });
});
