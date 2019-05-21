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
      clearInterval(seg);
      ovalBlack();
      seg = setInterval(automatic,3000);
      break;
    case "ahead":
      if (currentPosition < image.length - 1) {
        carrouselImage.src = image[currentPosition + 1];
        currentPosition++;

      } else {
        carrouselImage.src = image[0];
        currentPosition = 0;

      }
    clearInterval(seg);
    ovalBlack();
    seg = setInterval(automatic,3000);
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

 function automatic() {
  if (currentPosition < image.length - 1) {
    carrouselImage.src = image[currentPosition + 1];
    currentPosition++;
  } else {
    carrouselImage.src = image[0];
    currentPosition = 0;
  }
  ovalBlack
  ovalBlack();
};
/**
* when the active page loads the interval function and sends the data and the activation
* to the automatic function
 */
var seg;
window.onload = function interval() {
   seg = setInterval(automatic,3000);
   divCont[0].classList.add('oval-black');
}


/**
 *changes the color of the div's to black or gray
*/
 function ovalBlack(){
  for (let i = 0; i < divCont.length; i++){
    if (divCont[i] != divCont[currentPosition]){
      divCont[i].classList.remove('oval-black');
    }else{
      divCont[currentPosition].classList.add('oval-black');
    }

  }
};
/*In all elements of document, take all carrousel__arrow to send the function carrousel */
//addEventListener("click", changeImage);
carrouselArrows.forEach(function(element) {
  element.addEventListener("click", carrousel);
});
function selectOval(){
  if( action >= 0){
   carrouselImage.src = image[action];
   currentPosition = action;
   clearInterval(seg);
   ovalBlack();
   seg = setInterval(automatic,3000);
  }
 };
 /**
  * call the html elements
  */
var divCont = document.getElementById('divBtn').children;
var action;
var div1 = document.getElementById('divBtn1').addEventListener('click',function (){
  action = 0;
  selectOval();
  });
var div2 = document.getElementById('divBtn2').addEventListener('click',function (){
  action = 1;
  selectOval();
});
var div3 = document.getElementById('divBtn3').addEventListener('click',function (){
  action = 2;
  selectOval();
});
var div4 = document.getElementById('divBtn4').addEventListener('click',function (){
  action = 3;
  selectOval();
});



