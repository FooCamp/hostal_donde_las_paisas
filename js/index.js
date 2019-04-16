/* Logic for page animations and simple interactions should be placed here
   Any page or component specific logic should be placed in its own page/component js file.
**/
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
const image = [
  "assets/images/IMG_8056.JPG",
  "assets/images/IMG_8453.JPG",
  "assets/images/IMG_7977.JPG",
  "assets/images/IMG_7968.JPG"
  ];
let currentPosition = 0;
const carrouselArrows = document.querySelectorAll(".carrousel__arrow");
const carrouselImage = carrouselContainer.querySelector(".carrousel__img");
carrouselArrows.forEach(function(element) {
  element.addEventListener("click", carrousel);
});
