$(document).ready(function() {
  var clientId = '8dc874e0d4f1cee92baccecc9d7269da';
  var soundcloudInfo = function(data){

    var numOfTracks = data.length;
    console.log(numOfTracks);
    $('#numOfTracks').text(numOfTracks);
    // var tracks = data;
    for (var i = 0; i < 1; i++) {
      console.log(data[i]);
      // var artwork = data[i].artwork_url;
      var artwork = 'https://i1.sndcdn.com/artworks-000172260107-fv0zj9-large.jpg';
      console.log(artwork);
      $('.info').css("background-image","url(" + artwork + ")");
      var description = data[i].description;
      $('#description').text(description);
      console.log(description);
      var title = data[i].title;
      $('#title').text(title);
      console.log(title);
      var uri = data[i].uri;
      console.log(uri);
      var user_name = data[i].user.username ;
      $('#user_name').text(user_name);
      console.log(user_name);
      var commentCount = data[i].comment_count;
      $('#commentCount').text(commentCount);
      console.log(commentCount);
      var duration = data[i].duration;
      $('#duration').text(duration);
      console.log(duration);
      var genre = data[i].genre;
      $('#genre').text(genre);
      console.log(genre);
      var creationTime = data[i].created_at;
      $('#creationTime').text(creationTime);
      console.log(creationTime);
      var lastUpdatedTime = data[i].last_modified;
      $('#lastUpdatedTime').text(lastUpdatedTime);
      console.log(lastUpdatedTime);
      var format = data[i].original_format;
      $('#format').text(format);
      console.log(format);
      var permanentUrl = data[i].permalink_url;
      $('#permanentUrl').text(permanentUrl);
      console.log(permanentUrl);
      var $iframetag = '<iframe width="100%" height="250" scrolling="no" frameborder="no" src="'+'https://w.soundcloud.com/player/?url='+uri+'"&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
      console.log($iframetag);

      $('#video').append($iframetag);
      $('div.panel-default').removeClass('hidden');

    }

  };

  //get the value of genre
  var genre = $('#genre_input').val();
  $('#search_music').on('click', function() {
    $('div.panel-default').addClass('hidden');
    console.log('clicked');
    var soundcloudUrl = 'https://api.soundcloud.com/tracks.json?genre='+genre+'&client_id='+clientId;
    // call ajax for this url
    $.ajax(soundcloudUrl).done( soundcloudInfo );
      // soundcloudInfo(info);

  });

  // search by title
  var title = $('#title_input').val();
  $('#search_title').on('click', function() {
    $('div.panel-default').addClass('hidden');
    console.log('clicked');
    var soundcloudUrl = 'https://api.soundcloud.com/tracks.json?title='+title+'&client_id='+clientId;
    // call ajax for this url
    $.ajax(soundcloudUrl).done( function(info) {
      soundcloudInfo(info);
    });
  });

  // $.ajax('https://api.soundcloud.com/tracks.json?genre=Electric&client_id=8dc874e0d4f1cee92baccecc9d7269da').done(function(info) { console.log(info);console.log(info.length);  } );


  //maxmind


// clientid= 8dc874e0d4f1cee92baccecc9d7269da
// client secret = d62ba0d89258d0be072417696a1bdbdd
//
// <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274348181&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
//
// https://api.soundcloud.com/tracks/274348181
// https://api.soundcloud.com/tracks/274348181
//
// <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13158665&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
//
// http://soundcloud.com/alex-stevenson/munching-at-tiannas-house
// https://api.soundcloud.com/tracks/13158665/stream
// https://api.soundcloud.com/tracks/13158665
});
