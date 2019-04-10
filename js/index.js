/* Logic for page animations and simple interactions should be placed here
   Any page or component specific logic should be placed in its own page/component js file.
**/
let image = [
  "assets/images/IMG_8056.jpg",
  "assets/images/IMG_8453.jpg",
  "assets/images/IMG_7977.jpg",
  "assets/images/IMG_7968.jpg"
],
currentPosition = 0;

function carrousel(carrouselContainer) {
carrouselContainer.addEventListener("click", e => {
  let back = carrouselContainer.querySelector(".back"),
    ahead = carrouselContainer.querySelector(".ahead"),
    img = carrouselContainer.querySelector("img"),
    target = e.target;

  if (target == back) {
    if (currentPosition > 0) {
      img.src = image[currentPosition - 1];
      currentPosition--;
    } else {
      img.src = image[image.length - 1];
      currentPosition = image.length - 1;
    }
  } else if (target == ahead) {
    if (currentPosition < image.length - 1) {
      img.src = image[currentPosition + 1];
      currentPosition++;
    } else {
      img.src = image[0];
      currentPosition = 0;
    }
  }
});
}
let carrouselContainer = document.querySelector(".carrouselContainer");
carrousel(carrouselContainer);
