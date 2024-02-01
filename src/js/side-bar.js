let openMenuElement = document.querySelector('.menu-item--opened');
let menuElement = document.querySelector('.side-bar-container');
let closeMenuElement = document.querySelector('.navigation-links__item--closed');

openMenuElement.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuElement.classList.add('side-bar-container--opened');
});

closeMenuElement.addEventListener('click', function(){
  menuElement.classList.remove('side-bar-container--opened');
});
