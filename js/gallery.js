// Gallery page logic should be placed here.
/*charge the images with backgroundImage */
window.onload = function chargeImages()
{
const images = [
    "./../assets/images/gallery/1.jpg",
    "./../assets/images/gallery/2.jpg",
    "./../assets/images/gallery/3.jpg",
    "./../assets/images/gallery/4.jpg",
    "./../assets/images/gallery/5.jpg",
    "./../assets/images/gallery/6.jpg",
    "./../assets/images/gallery/7.jpg",
    "./../assets/images/gallery/8.jpg"
]
let div1 = document.getElementById('divImagesContainer').children;
for (let i = 0; i < div1.length; i++){
    div1[i].firstChild.style.backgroundImage = `url('${images[i]}')`;  
}
}