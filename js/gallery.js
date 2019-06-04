// Gallery page logic should be placed here.
/*charge the images with backgroundImage */
window.onload = function chargeImages()
{
const images = [
    "./../assets/images/1.jpg",
    "./../assets/images/2.jpg",
    "./../assets/images/3.jpg",
    "./../assets/images/4.jpg",
    "./../assets/images/5.jpg",
    "./../assets/images/6.jpg",
    "./../assets/images/7.jpg",
    "./../assets/images/8.jpg"
]
let div1 = document.getElementById('divImagesContainer').children;
for (let i = 0; i < div1.length; i++){
    div1[i].firstChild.style.backgroundImage = `url('${images[i]}')`;  
}
}