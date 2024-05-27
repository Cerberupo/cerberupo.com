import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

export default function initSwiper(container) {
    if (!container) return undefined;
    const progressCircle = container.querySelector(".autoplay-progress svg");
    const progressContent = container.querySelector(".autoplay-progress span");
    return new Swiper(container, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: "auto",
        centeredSlides: true,
        grabCursor: true,
        direction: 'horizontal',
        spaceBetween: 16,
        loop: true,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", (1 - progress).toString());
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });
}