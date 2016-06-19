var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
var newLeft;
var oldLeft;
var walkIdLeft;
var walkIdRight;

var catwalkRight = function() {
   oldLeft = parseInt(img.style.left);
   newLeft = oldLeft + 8;
  img.style.left = newLeft + 'px';
  if (newLeft === ((window.innerWidth) - 200)){
    img.style.transform="scale(-1,1)"
     walkIdLeft =  setInterval(catwalkLeft,100);
     clearInterval(walkId);
     clearInterval(walkIdRight);
   }
}

var catwalkLeft = function() {
  oldLeft = parseInt(img.style.left);
  newLeft= oldLeft - 15;
  img.style.left = newLeft + 'px';
  if (newLeft === 160 ){
    img.style.transform="scale(1,1)"

   clearInterval(walkIdLeft);
   walkIdRight = setInterval(catwalkRight,100);
 }
}

var walkId = setInterval(catwalkRight, 100);
