// Gallery page logic should be placed here.
/*charge the images with backgroundImage */
window.onload = function chargeImages() {
  const imagesGallery = [
    "./../assets/images/gallery/1.jpg",
    "./../assets/images/gallery/2.jpg",
    "./../assets/images/gallery/3.jpg",
    "./../assets/images/gallery/4.jpg",
    "./../assets/images/gallery/5.jpg",
    "./../assets/images/gallery/6.jpg",
    "./../assets/images/gallery/7.jpg",
    "./../assets/images/gallery/8.jpg"
  ];
  let div1 = document.getElementById("divImagesContainer").children;
  let imagesContainer = document.querySelector('#divImagesContainer');

  for (let i = 0; i < imagesGallery.length; i++) {
    imagesContainer.innerHTML += `
  <div class="gallery-item">
    <div class="gallery-item__images" style="background-image: url(${imagesGallery[i]})"></div>
    <div class="gallery-item__overlay">
      <img
        src="./../assets/images/gallery/expand_icon.svg"
        class="overlay__image"
        alt=""
      />
    </div>
  </div>`;
  }
  addListernersToGalleryItems();
  closeModal();
};

function closeModal() {
  let closeModal = document.querySelector('.gallery-modal__close');
  let galleryModal = document.querySelector('#modal');

  closeModal.addEventListener('click', function () {
    galleryModal.classList.remove('gallery__modal--visible');
  })
}

function addListernersToGalleryItems() {
  let galleryModal = document.querySelector('#modal');
  let galleryItems = document.querySelectorAll('.gallery-item');
  let modalImage = document.querySelector('.gallery-modal__image');

  for (const galleryItem of galleryItems) {
    galleryItem.addEventListener('click', function () {
      galleryModal.classList.add('gallery__modal--visible');
      modalImage.style.backgroundImage = this.querySelector('.gallery-item__images').style.backgroundImage
    })
  }
}
