// $(document).ready(function() {
//   var getLatitudesLongitudes = function(data){
//     var latitude = data.coord.lat;
//     var longitude = data.coord.lon;
//     console.log(latitude);
//     console.log(longitude);
//   };
//   $('#search').on('click',function() {
//     var location = $('#location_name').val();
//     // console.log('Clicked'+location);
//     var weatherApiKey = '1e72b2c325eb2db06583d6e20786823c';
//     var weatherUrl = ('http://api.openweathermap.org/data/2.5/weather?q=Sydney&APIKey='+ weatherApiKey);
//     var googlePlaceKey = 'AIzaSyAEjWoX_DqD8N1OwMy8LyL8VNndGOh7iRE';
//     var googlePlaceUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&key='+googlePlaceKey;
//
//     // 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&key=AIzaSyAEjWoX_DqD8N1OwMy8LyL8VNndGOh7iRE'
//
//     $.ajax(weatherUrl).done(function(info) {
//
//       getLatitudesLongitudes(info);
//     });
//   });
//   $('#search_music').on('click',function() {
//     var artist = $('#artist_name').val();
//     var album = $('#album_name').val();
//     var lastFmApiKey = 'd598bfc3a890029c481aec946554d638';
//     var lastFmurl =  'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key='+lastFmApiKey+'&artist='+artist+'&album='+album+'&format=json';
//
//     $.ajax(lastFmurl).done(function(info) {
//       console.log(info);
//       console.log(info.album.artist);
//       for (var i = 0; i < (info.album.image).length; i++) {
//         console.log((info.album.image)[i]['#text']);
//       }
//     });
//   });
// });
//
//
// var youtubeAPIKey = 'AIzaSyAt9Y90LBW8F0pS3JoFVPxY8w17O3ElmRk';
// var url = 'http://gdata.youtube.com/feeds/users/'+'[YOUTUBE_USER]/uploads?alt=json-in-script&format=5';
// $.ajax({
//     url: "https://gdata.youtube.com/feeds/api/videos/" + videoID + "?v=2&alt=json",
//     dataType: "jsonp",
//     async: "false",
//     success: function(data) {
//         console.log(data);
//     }
// });
// $.ajax('https://api.soundcloud.com/tracks.json?genre=Electric&client_id=8dc874e0d4f1cee92baccecc9d7269da').done(function(info) { console.log(info) } );
//
// // soundcloud
// // spotify
//
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
//maxmind
