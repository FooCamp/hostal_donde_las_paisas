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
break;
case "ahead":
if (currentPosition < image.length - 1) {
carrouselImage.src = image[currentPosition + 1];
currentPosition++;
} else {
carrouselImage.src = image[0];
currentPosition = 0;
}
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
/*In all elements of document, take all carrousel__arrow to send the function carrousel */
carrouselArrows.forEach(function(element) {
element.addEventListener("click", carrousel);
});
