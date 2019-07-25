// Gallery page logic should be placed here.
/*charge the images with backgroundImage */
window.onload = function chargeImages() {
  const imagesGallery = [
    "./../assets/images/hdlp_1.JPG",
    "./../assets/images/hdlp_2.JPG",
    "./../assets/images/hdlp_3.JPG",
    "./../assets/images/hdlp_4.JPG",
    "./../assets/images/hdlp_5.JPG",
    "./../assets/images/hdlp_6.JPG",
    "./../assets/images/hdlp_7.JPG",
    "./../assets/images/hdlp_8.JPG"
  ];
  let div1 = document.getElementById("divImagesContainer").children;
  for (let i = 0; i < div1.length; i++) {
    div1[i].firstElementChild.style.backgroundImage = `url('${
      imagesGallery[i]
    }')`;
  }
};
