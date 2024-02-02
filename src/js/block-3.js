let repairSwiper;
let repairContainerElement = document.querySelector('.repair-list');
let buttonElement = document.querySelector('.button-second');
let pageContainerElement = document.querySelector('.third-section-container');

let openRepairMenu = function () {
  if (repairContainerElement.classList.contains('repair-list--hidden')) {
    repairContainerElement.classList.remove('repair-list--hidden');
    repairContainerElement.classList.add('repair-list--unhidden');

    let buttonText = buttonElement.querySelector('.button-second__text');
    buttonText.textContent = 'Скрыть';

    let buttonImg = buttonElement.querySelector('.button-second__img');
    buttonImg.src = './img/up.png';

  } else if (repairContainerElement.classList.contains('repair-list--unhidden')) {

    repairContainerElement.classList.remove('repair-list--unhidden');
    repairContainerElement.classList.add('repair-list--hidden');

    let buttonText = buttonElement.querySelector('.button-second__text');
    buttonText.textContent = 'Показать все';

    let buttonImg = buttonElement.querySelector('.button-second__img');
    buttonImg.src = './img/expand.png';
  }
}

 buttonElement.addEventListener('click', openRepairMenu);
