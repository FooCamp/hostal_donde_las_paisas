/* Logic for page animations and simple interactions should be placed here
   Any page or component specific logic should be placed in its own page/component js file.
**/
/*
  this function validates the position of the image in the array to know if it returns to the previous one or goes forward,
   also if it is in the position [0] and returns it to the last position [3] also to the reverse
*/
function carrousel() {
  switch (this.dataset.direction) {
    case "back":
      if (currentPosition > 0) {
        carrouselImage.src = image[currentPosition - 1];
        currentPosition--;
        } else {
        carrouselImage.src = image[image.length - 1];
        currentPosition = image.length - 1;
        }
        ovalBlackback();
        ovalBlackBack1();
      break;
    case "ahead":
      if (currentPosition < image.length - 1) {
        carrouselImage.src = image[currentPosition + 1];
        currentPosition++;

      } else {
        carrouselImage.src = image[0];
        currentPosition = 0;
      }

      ovalBlack1();
      ovalBlack();
      break;
    default:
      break;
  }
}
/*Array about images */
const image = [
  "assets/images/IMG_8056.JPG",
  "assets/images/IMG_8453.JPG",
  "assets/images/IMG_7977.JPG",
  "assets/images/IMG_7968.JPG"
  ];
/*count the positions of the array to know what is the previus or next depend of button*/
let currentPosition = 0;
/*Take all arrows in the document*/
const carrouselArrows = document.querySelectorAll(".carrousel__arrow");
/* Take actual image from document */
const carrouselImage = document.querySelector(".carrousel__img");

/*call the div's*/
var div1 = document.getElementById('divBtn1');
var div2 = document.getElementById('divBtn2');
var div3 = document.getElementById('divBtn3');
// the automatic function changes the images of slider every 3 seconds and the color of the divs.
 function automatic() {
  if (currentPosition < image.length - 1) {
    carrouselImage.src = image[currentPosition + 1];
    currentPosition++;
    ovalBlack();
  } else {
    carrouselImage.src = image[0];
    currentPosition = 0;
    ovalBlack1();
  }
};
/*when the active page loads the interval function and sends the data and the activation
 to the automatic function*/
var seg;
window.onload = function interval() {
   seg = setInterval(automatic,3000);
}
//change the color of div's to black
function ovalBlack1(){
  if (currentPosition == 0 ){
    div1.classList.add('oval-black');
    div2.classList.remove('oval-black');
    div3.classList.remove('oval-black');
  }
};
// changes the color of the div's to black or gray
function ovalBlack(){
  if (currentPosition == 1 ){
    div2.classList.add('oval-black');
    div1.classList.remove('oval-black');
    div1.classList.add('oval-gray');
    div3.classList.remove('oval-black');
  }else if (currentPosition == 2){
    div3.classList.add('oval-black');
    div2.classList.remove('oval-black');
    div1.classList.add('oval-gray');
  }
};
//changes the color of the div's to black or gray when it goes back
function ovalBlackBack1(){
  if (currentPosition == 0 ){
    div1.classList.add('oval-black');
    div2.classList.remove('oval-black');
    div3.classList.remove('oval-black');
  }
};

function ovalBlackback(){
  if (currentPosition == 1 ){
    div2.classList.add('oval-black');
    div1.classList.remove('oval-black');
    div1.classList.add('oval-gray');
    div3.classList.remove('oval-black');
  }else if (currentPosition == 2){
    div3.classList.add('oval-black');
    div2.classList.remove('oval-black');
    div1.classList.remove('oval-black');
    div1.classList.add('oval-gray');
  }
};


//change the image when selected div1
function changeImage(){

  if ( div1.onclick ){
    carrouselImage.src = image[0];
    currentPosition = 0;
    ovalBlack1();
    ovalBlack();
  }
};
//change the image when selected div2
function changeImage2(){
  if ( div2.onclick ){
    carrouselImage.src = image[1];
    currentPosition = 1;
    ovalBlack();
  }
};
//change the image when selected div3
function changeImage3(){
  if ( div3.onclick ){
    carrouselImage.src = image[2];
    currentPosition = 2;
    ovalBlack();
    }
};
/*In all elements of document, take all carrousel__arrow to send the function carrousel */
//addEventListener("click", changeImage);
carrouselArrows.forEach(function(element) {
  element.addEventListener("click", carrousel);
});




