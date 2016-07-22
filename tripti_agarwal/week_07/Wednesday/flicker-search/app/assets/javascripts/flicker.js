$(document).ready(function() {
  var page = 0;
  var totalPages =0;
  // var currentPage =0;
  var settings = {
    currentPage: 1,
    endReached: false,
    requestInProgress: false,
  };
  var searchFlickr = function() {
    if (settings.endReached) {
      return;
    }
    var query = $('#query').val();
    var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
    console.log('searching for flickr', query , 'current Page:',settings.currentPage);
    var jsonCall = function() {
      settings.requestInProgress = true;
      $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: query,
        format: 'json',
        page: settings.currentPage++,
      }).done(function (info) {
        // console.log(info);
        settings.requestInProgress = false;
        totalPages = info.photos.pages;
        currentPage = info.photos.page;
        if (info.photos.page >= info.photos.pages) {
          settings.endReached = true;
        }
        _(info.photos.photo).each(function(p) {
          var url  = generateURL(p);
          var webUrl = generateWebURL(p);
          var $a = $('<a>', {
            href: webUrl,
          }).appendTo('#results');
          var $img = $('<img>', {
            src: url
          }).appendTo($a);
        });
      });
    };

        var throttledFlickr = function() {
          // console.log('throttle');
          _.throttle( jsonCall() ,2500);
        };
        throttledFlickr();
    // jsonCall();

  };

  var generateURL = function(photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // change this for tdifferent sizes
    ].join('');
  };
  var generateWebURL = function(photo) {
    // https://www.flickr.com/photos/12037949754@N01/155761353/
    return [
      'https://www.flickr.com/photos/',
      photo.owner,
      '/',
      photo.id,
      '/'
    ].join('');
  };

  var onClickSearch = function() {
    settings.endReached = false;
    settings.currentPage = 1;
    $('#results').empty();
    searchFlickr();
  };
  $('#search').on('click', onClickSearch);
  var searchFlickrThrottled = _.throttle(searchFlickr,5000, { trailing: false});
//when window has scrolled to the bottoom of the docuemnt
  $(window).on('scroll', function() {
    // console.log(page);
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    if(((scrollTop+windowHeight) > 0.8 * documentHeight) && (settings.requestInProgress === false)) {
        searchFlickrThrottled();
    }

    // console.log(scrollTop + windowHeight , documentHeight);
  });
});
