$(document).ready(function() {
  $('#search').on('click',function() {
    var marvelName = $('#marvel_name').val();
    console.log(marvelName);
    var yourAPIKEY = '674ae3076677d5a69c7145361456ae1e';
    var public_key= '674ae3076677d5a69c7145361456ae1e';
    var private_key= '3e0fe1624f030bd13fcca3245b06fd725d767c9d';
    var ts = Time.now;


    var url = 'http://gateway.marvel.com/v1/public/comics?apikey='+yourAPIKEY+'&hash='+my_hash;
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) {
        return;
      }
      info = JSON.parse(xhr.responseText);
      console.log(info);
    };
  });
});
// var url = "http://gateway.marvel.com/v1/public/comics?limit=100&format=comic&formatType=comic&dateRange="+year+"-01-01%2C"+year+"-12-31&apikey="+KEY;

// Request: GET http://gateway.marvel.com/v1/public/comics?apikey=yourAPIKEY&callback=callback_param
