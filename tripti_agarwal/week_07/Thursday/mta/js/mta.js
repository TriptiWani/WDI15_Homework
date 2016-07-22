$(document).ready(function() {
  //global variables
  var routes = {
    'L' : ['8th','6th','Union Square', '3rd', '1st'],
    'N' : ['Times Square','34th','28th','23rd','Union Square','8th'],
    '6' : ['Grand Central', '33rd','28th','23rd','Union Square','Astor Place'],
  };
  var intersectionStation = _.intersection(routes.L,routes.N,routes['6']);
//function generic for one line with source and destination
  var routeOnSameLine = function(line,srcStation,destStation){
    var stationsToTravel;
    var indexOfSrcStation;
    var indexOfDestStation;
    if ((_.indexOf(routes[line],destStation)) > (_.indexOf(routes[line],srcStation))){
      indexOfSrcStation = _.indexOf(routes[line],srcStation);
      indexOfDestStation = _.indexOf(routes[line],destStation);
      stationsToTravel = _.map(_.range((indexOfSrcStation+1),(indexOfDestStation+1)),function(i){
        return (routes[line][i]);
      });
    } else {
      var stations = routes[line].reverse();
      indexOfSrcStation = _.indexOf(stations,srcStation);
      indexOfDestStation = _.indexOf(stations,destStation);
      stationsToTravel = _.map(_.range(indexOfSrcStation+1 ,indexOfDestStation+1),function(i){
        return (stations[i]);
      });
    }
    return stationsToTravel;
  };
  $('#stationFrom').on('change',function() {
    $('#stationTo').on('change',function(){
      $('button').removeClass('hidden');
    });
  });
  // event for search
  $('#searchRoute').on('click',function(){
    $('#results').empty();
    var sourceRoute = $("#stationFrom > option:selected").html();
    var destinationRoute =$("#stationTo > option:selected").html();
    var sourceLine = _.first(sourceRoute.split(','));
    var sourceStation = _.last(sourceRoute.split(','));
    var destinationLine = _.first(destinationRoute.split(','));
    var destinationStation = _.last(destinationRoute.split(','));
    var numberOfStops;
    // if the line to travel is same
    if (sourceLine === destinationLine){
      if (sourceStation === destinationStation){
        $('#results').html("<p class='changeAt'>You are already there</p>");
      } else {
        numberOfStops = (routeOnSameLine(sourceLine,sourceStation,destinationStation)).length;
        var $p = "<p> Number of Stops: "+ numberOfStops+"</p><p>Stations to travel on Line "+sourceLine+": "+ routeOnSameLine(sourceLine,sourceStation,destinationStation)+"</p>";
        console.log($p);
      $('#results').append($p);
      }
    } else {
      numberOfStops = (routeOnSameLine(sourceLine,sourceStation,intersectionStation[0])).length+(routeOnSameLine(destinationLine,intersectionStation[0],destinationStation).length);
      console.log(routeOnSameLine(sourceLine,sourceStation,intersectionStation[0]));
      console.log(routeOnSameLine(destinationLine,intersectionStation[0],destinationStation));
      console.log(_.union(
        routeOnSameLine(sourceLine,sourceStation,intersectionStation[0]),
        routeOnSameLine(destinationLine,intersectionStation[0],destinationStation)
      ));
        var $nestedP = ("<p> Number of Stops: "+ numberOfStops+"</p><p>Stations to travel on Line "+sourceLine+": "+ routeOnSameLine(sourceLine,sourceStation,intersectionStation[0])+ "</p><p class='changeAt'>Change at "+intersectionStation+" and then continue on Line "+ destinationLine +"</p><p>Stations to travel on Line "+sourceLine+": " +                  routeOnSameLine(destinationLine,intersectionStation[0],destinationStation)+"</p>");
        $('#results').append($nestedP);
      // console.log('Change at '+intersectionStation+' and then continue on '+ destinationLine);
      // routeOnSameLine(destinationLine,intersectionStation[0],destinationStation);
    }

  });
});
