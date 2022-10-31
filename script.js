'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll('.btn--show-modal-window');

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

///////////////////////////////////////
// Modal window
const openModalWindow = function (e) {
    e.preventDefault()
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach((button) => {
    return button.addEventListener('click', openModalWindow)
})

// for (let i = 0; i < btnsOpenModalWindow.length; i++) btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
        closeModalWindow();
    }
});

// Scroll
// Плавная прокрутка до первой секции
btnScrollTo.addEventListener('click', (e) => {
    section1.scrollIntoView({behavior: "smooth"})
})


// Smooth page navigation

/*
document.querySelectorAll('.nav__link').forEach(function (htmlElement) {
    htmlElement.addEventListener('click', function (e) {
        e.preventDefault()
        const href = this.getAttribute('href')
        console.log(href)
        document.querySelector(href).scrollIntoView({behavior: "smooth"})
    })
})
*/

// Делегирование событий
// 1. Добавляем event listener для ОБЩЕГО родителя
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault()
    // 2. Определить target элемент
    if (e.target.classList.contains('nav__link')) {
        const href = e.target.getAttribute('href')
        document.querySelector(href).scrollIntoView({behavior: "smooth"})
    }
})
