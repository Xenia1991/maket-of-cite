let openCallMenuElement = document.querySelectorAll('.contact-link--opened');
let callMenuElement = document.querySelector('.call-container');
let closeMenuElement = document.querySelector('.call-close');
let overlayMenuElement = document.querySelector('.overlay');

for (let i=0; i<openCallMenuElement.length; i++) {
  openCallMenuElement[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    callMenuElement.classList.remove('call-container');
    callMenuElement.classList.add('call-container--hidden');
    overlayMenuElement.classList.remove('overlay');
    overlayMenuElement.classList.add('overlay--opened');
  })
}

closeMenuElement.addEventListener('click', function () {
  callMenuElement.classList.remove('call-container--hidden');
  callMenuElement.classList.add('call-container');
  overlayMenuElement.classList.remove('overlay--opened');
  overlayMenuElement.classList.add('overlay');
})
