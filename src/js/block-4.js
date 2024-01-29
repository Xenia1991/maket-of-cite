let priceSwiper;
let pageContainerElement = document.querySelector('.forth-section-container');

priceSwiper = new Swiper('.swiper', {
    slidesPerView: '1.13',

    spaceBetween: '10',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
