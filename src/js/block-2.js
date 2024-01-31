import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

let buttonElement1 = document.querySelector('.button-first');
let sliderElement = document.querySelector('.brand-list');
const bodyElement = document.body;

let openBrandMenu = function () {

   if (sliderElement.classList.contains('brand-list--hidden')) {

       sliderElement.classList.remove('brand-list--hidden');
       sliderElement.classList.add('brand-list--unhidden');

       let buttonText = buttonElement1.querySelector('.button-first__text');
       buttonText.textContent = 'Скрыть';

       let buttonImg = buttonElement1.querySelector('.button-first__img');
       buttonImg.src = './img/up.png';

   } else if (sliderElement.classList.contains('brand-list--unhidden')) {

       sliderElement.classList.remove('brand-list--unhidden');
       sliderElement.classList.add('brand-list--hidden');

       let buttonText = buttonElement1.querySelector('.button-first__text');
       buttonText.textContent = 'Показать все';

       let buttonImg = buttonElement1.querySelector('.button-first__img');
       buttonImg.src = './img/expand.png';

   }
}

let swiper;

if (bodyElement.clientWidth < 768) {
  swiper = new Swiper('.swiper', {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}

const toggleSwiper = () => {
  if (bodyElement.clientWidth < 768 && !swiper) {
    swiper = new Swiper('.swiper', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  } else if (bodyElement.clientWidth >= 768 && swiper) {
    swiper.forEach((swiperInstance) => swiperInstance.disable());
    swiper.forEach((swiperInstance) => swiperInstance.destroy(false, true));
    swiper = null;
  }
};

buttonElement1.addEventListener('click', openBrandMenu);
window.addEventListener ('resize', toggleSwiper);
