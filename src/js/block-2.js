// let buttonElement1 = document.querySelector('.button-first');
// let sliderElement = document.querySelector('.brand-list');
// let containerElement = document.querySelector('.second-section-container');
// let swiperPage;

// let openBrandMenu = function () {

//    if (sliderElement.classList.contains('brand-list--hidden')) {

//        sliderElement.classList.remove('brand-list--hidden');
//        sliderElement.classList.add('brand-list--unhidden');

//        let buttonText = buttonElement1.querySelector('.button-first__text');
//        buttonText.textContent = 'Скрыть';

//        let buttonImg = buttonElement1.querySelector('.button-first__img');
//        buttonImg.src = './img/up.png';

//    } else if (sliderElement.classList.contains('brand-list--unhidden')) {

//        sliderElement.classList.remove('brand-list--unhidden');
//        sliderElement.classList.add('brand-list--hidden');

//        let buttonText = buttonElement1.querySelector('.button-first__text');
//        buttonText.textContent = 'Показать все';

//        let buttonImg = buttonElement1.querySelector('.button-first__img');
//        buttonImg.src = './img/expand.png';

//    }
// }

// let resizeWindow = function () {

//    if (containerElement.clientWidth < 768 && !swiperPage) {
//       swiperPage = new Swiper('.slider-list', {
//          slidesPerView: '1.2',

//          pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//          }
//       });
//    } else if (containerElement.clientWidth>=768 && swiperPage) {
//       swiperPage.disable();
//       swiperPage.destroy(false, true);
//       swiperPage = null;
//    }

// }

// if (containerElement.clientWidth < 768) {

//    swiperPage = new Swiper('.slider-list', {

//       slidesPerView: '1.2',

//       pagination: {
//          el: '.swiper-pagination',
//          clickable: true,
//       }

//    });
// };

// buttonElement1.addEventListener('click', openBrandMenu);
// window.addEventListener ('resize', resizeWindow);
