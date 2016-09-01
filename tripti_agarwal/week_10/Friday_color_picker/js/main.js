$(document).ready(function(){
  $('#container').mousemove(function(event){
    var z =  pageZ(event.pageX,event.pageY);
    var rgbVal = rgbValues(event.pageX,event.pageY,z);
    var rgb = rgbColors(rgbVal[0],rgbVal[1],rgbVal[2]);
    var hex = hexColors(rgbVal[0],rgbVal[1],rgbVal[2]);
    var hsla = hslaColors(rgbVal[0],rgbVal[1],rgbVal[2]);
    $('#rgbcolor').text(rgb);
    // $(this).css({ 'background-color':rgb });

    $('#hexcolor').text(hex);
    $(this).css({ 'background-color':hex });

    $('#hslacolor').text(hsla);
    // $(this).css({ 'background-color':hsla });
  });
  var pageZ = function(x,y){
  return  Math.sqrt((x*x)+(y*y));
  };
  var rgbValues = function(x,y,z){
    var r = (x/1100)*256;
    var g = (y/1100)*256;
    var b = (z/1100)*256;
    return [r,g,b];
  };
  var rgbColors = function(r,g,b){
    return ('rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')');
  };

  var hexColors = function(r,g,b){
    return ('#'+Number(Math.round(r)).toString(16)+Number(Math.round(g)).toString(16)+Number(Math.round(b)).toString(16));
  };

  var hslaColors = function(r,g,b){
    var R = r/255;
    var G = g/255;
    var B = b/255;
    var min = Math.min(R,G,B);
    var max = Math.max(R,G,B);

    var luminace = Math.round(100*(min + max)/2);

    var calculateSaturation =  function(max,min,luminace) {
      var saturation_temp;
      if (max === min){
        saturation_temp = 0;
      } else if (luminace <= 50){
        saturation_temp = Math.round(100*(max - min)/(max + min));
      } else if ( luminace > 50) {
        saturation_temp = Math.round(100*(max - min)/(2.0 - max - min));
      }
      return saturation_temp;
    };
    saturation = calculateSaturation(max,min,luminace);
    var hue_temp;
    switch (max) {
      case R:
        hue_temp = (G - B)/(max - min);
        break;
      case G:
        hue_temp = 2.0 + ((B - R)/(max - min));
        break;
      case B:
        hue_temp = 4.0 + ((R - G)/ (max - min));
        break;
    }
    var hueClaculation = function(h){
      if (h > 0){
        hueValue = Math.round(60 * h);
      } else {
        huevalue = Math.round(60 * h) + 360;
      }
      return hueValue;
    };
    var hue = hueClaculation(hue_temp);
    return ('hsl(' + hue + ', ' + saturation + '%, '+ luminace +'%)');
  };
});
