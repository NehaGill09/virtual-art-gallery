const artworks = document.querySelectorAll('.artwork');
const modalContainer = document.getElementById('modal-container');
const modalImg = document.querySelector('.modal-img');
const modalTitle = document.querySelector('.modal-title');
const modalArtist = document.querySelector('.modal-artist');
const closeBtn = document.querySelector('.close-btn');

artworks.forEach(artwork => {
  artwork.addEventListener('click', () => {
    const title = artwork.getAttribute('data-title');
    const artist = artwork.getAttribute('data-artist');
    const imgSrc = artwork.querySelector('img').src;

    modalTitle.textContent = title;
    modalArtist.textContent = artist;
    modalImg.src = imgSrc;
    modalContainer.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});
