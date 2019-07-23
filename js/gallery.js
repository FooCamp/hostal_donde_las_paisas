// Gallery page logic should be placed here.
/*charge the images with backgroundImage */
window.onload = function chargeImages() {
  const imagesGallery = [
    "./../assets/images/gallery/1.JPG",
    "./../assets/images/gallery/2.JPG",
    "./../assets/images/gallery/3.JPG",
    "./../assets/images/gallery/4.JPG",
    "./../assets/images/gallery/5.JPG",
    "./../assets/images/gallery/6.JPG",
    "./../assets/images/gallery/7.JPG",
    "./../assets/images/gallery/8.JPG"
  ];
  let div1 = document.getElementById("divImagesContainer").children;
  for (let i = 0; i < div1.length; i++) {
    div1[i].firstElementChild.style.backgroundImage = `url('${
      imagesGallery[i]
    }')`;
  }
};
