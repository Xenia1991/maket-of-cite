let openCallMenuElement = document.querySelectorAll('.contact-link--opened');
let callMenuElement = document.querySelector('.call-container');
let closeMenuElement = document.querySelector('.call-close');
console.log(openCallMenuElement);

for (let i=0; i<openCallMenuElement.length; i++) {
  openCallMenuElement[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log('click');
    callMenuElement.classList.remove('call-container');
    callMenuElement.classList.add('call-container--hidden');
  })
}

closeMenuElement.addEventListener('click', function () {
  callMenuElement.classList.remove('call-container--hidden');
    callMenuElement.classList.add('call-container');
})
