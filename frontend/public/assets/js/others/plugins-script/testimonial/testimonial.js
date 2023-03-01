"use strict";
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    // If we need pagination

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },

    // And if we need scrollbar
});
const swiper5 = new Swiper(".swiper-center-zoom", {
    // Optional parameters
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 20,
    // If we need pagination

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },

    // And if we need scrollbar
});
const swiper2 = new Swiper(".swiper-4-item", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 4,
    spaceBetween: 0,
    // If we need pagination

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1124: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },

    // And if we need scrollbar
});

var swiper3 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,

    watchSlidesProgress: true,
});
var swiper4 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
});