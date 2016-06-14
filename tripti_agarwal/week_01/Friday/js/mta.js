var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
var lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
var line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

var subwayLines = {lineN, lineL, line6};
var intersectStop = 'Union Square';

var mtaMain = function( srcLine, src, destLine, dest) {
  if (srcLine === destLine){ //same line
    var sameLineFlag = true;
    srcToDest(srcLine,src,dest);
  } else { //diff line
    var diffLineFlag = true;
    console.log('Your destination is on a diff line. Change at '+ intersectStop + ' from '+srcLine+ ' to '+ destLine + ' to reach your destination '+ dest);
    srcToDest(srcLine,src,intersectStop);
    srcToDest(destLine,intersectStop,dest);
  }

};
var srcToDest = function(line, source, dest) {
  console.log(source);
console.log(line.indexOf(source));
    if ( line.indexOf(source) === -1 ) {
      console.log('Src not found');
    } else if  (line.indexOf(dest) === -1){
      console.log('Dest not found');
    } else {
      var message = stnInTransit(line, line.indexOf(source), line.indexOf(dest));
      console.log(message);
    }
};

var stnInTransit = function (line, srcIndex, destIndex) {

  var stnToTravel = [];


     if (srcIndex < destIndex ) {
          stnToTravel = stnInBtwn ( line, srcIndex, destIndex , 'forward');
        if (stnToTravel.length === 0){
          return ('your destination ' +  line[destIndex] + ' is next stop');
        }
        else {
        return ('you need to travel in forward ' + stnToTravel.length  + ' stations which are ' + stnToTravel.join(' , ') + ' to reach your destination ' + line[destIndex]);
        }
      } else if (srcIndex > destIndex) {
          stnToTravel = stnInBtwn ( line, destIndex, srcIndex , 'backward');
        //	console.log(stnToTravel.length);
        if (stnToTravel.length === 0){
          return ('your destination ' +  line[destIndex] + ' is next stop');
        }
        else {
        return ('You need to travel in backwards ' + stnToTravel.length + ' stations which are ' + stnToTravel + ' to reach your destination ' + line[destIndex]);
        }
      } else {
        return ('Src and Dest is same');
      }


};

var stnInBtwn = function ( line, srcIndex, destIndex , direction){
  var transitStn = [];
  var i = srcIndex;
  transitStn = line.slice(srcIndex+1 , destIndex);
  if ( direction === 'backward') {
    transitStn = transitStn.reverse();
  }
  return transitStn;
};
