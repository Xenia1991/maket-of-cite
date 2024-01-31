let repairSwiper;
let repairContainerElement = document.querySelector('.repair-list');
let buttonElement2 = document.querySelector('.button-second');
let pageContainerElement = document.querySelector('.third-section-container');

if (pageContainerElement.clientWidth < 768) {
    repairSwiper = new Swiper('.swiper', {

       spacebetween: '16',

       slidesPerView: '1.13',

       pagination: {
          el: '.swiper-pagination',
          clickable: true,
       }
    });
 };

 let windowResizing = function () {
    if (pageContainerElement.clientWidth < 768 && !repairSwiper) {
       repairSwiper = new Swiper('.swiper', {
          slidesPerView: '1.2',

          pagination: {
             el: '.swiper-pagination',
             clickable: true,
          }
       });
    } else if (pageContainerElement.clientWidth>=768 && repairSwiper) {
       repairSwiper.disable();
       repairSwiper.destroy(false, true);
       repairSwiper = null;
    }
 }

let openRepairMenu = function () {
    if (repairContainerElement.classList.contains('repair-list--hidden')) {

        repairContainerElement.classList.remove('repair-list--hidden');
        repairContainerElement.classList.add('repair-list--unhidden');

        let buttonText = buttonElement2.querySelector('.button-second__text');
        buttonText.textContent = 'Скрыть';

        let buttonImg = buttonElement2.querySelector('.button-second__img');
        buttonImg.src = './img/up.png';

    } else if (repairContainerElement.classList.contains('repair-list--unhidden')) {

        repairContainerElement.classList.remove('repair-list--unhidden');
        repairContainerElement.classList.add('repair-list--hidden');

        let buttonText = buttonElement2.querySelector('.button-second__text');
        buttonText.textContent = 'Показать все';

        let buttonImg = buttonElement2.querySelector('.button-second__img');
        buttonImg.src = './img/expand.png';

    }
}

 window.addEventListener ('resize', windowResizing);
 buttonElement2.addEventListener('click', openRepairMenu);
