'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll('.btn--show-modal-window');

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


/////////////////////////////////////////////////
// Выбор элементов
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

console.log(document.querySelector('.header'))
const sections = document.querySelectorAll('.section')
console.log(sections)

console.log(document.getElementById('section--1'))
const buttons = document.getElementsByTagName('button')
console.log(buttons)

console.log(document.getElementsByClassName('btn'))

/////////////////////////////////////////////////
// Создание и вставка элементов
// .insertAdjacentHTML()
/*
const message = document.createElement('div')
message.classList.add('cookie-message')
// message.textContent = 'Мы используем на этом сайте cookie для улучшения функциональности.'
message.innerHTML = 'Мы используем на этом сайте cookie для улучшения функциональности.<button class="btn btn--close-cookie">Ok!</button>'

const header = document.querySelector('.header')
// header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))
// header.before(message)
// header.after(message)

// Удаление элементов
document.querySelector('.btn--close-cookie')
    .addEventListener('click', () => {
        message.remove()                         // new version
        // message.parentElement.removeChild(message)  // old version
    })


// Стили
message.style.backgroundColor = '#076785'
message.style.width = '120%'
console.log(message.style.width)
console.log(message.style.color)
console.log(message.style.backgroundColor)
console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message))
console.log(getComputedStyle(message).height)
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 50 + 'px'
console.log(message.style.height)

document.documentElement.style.setProperty('--color-first', 'yellow')


// Атрибуты
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.src)
console.log(logo.getAttribute('src'))
console.log(logo.className)

logo.alt = 'Лого Прекрасного Банка'
console.log(logo.alt)

// Нестандартный атрибут
// console.log(logo.developer)      // undefined
console.log(logo.getAttribute('developer'))
logo.setAttribute('copyright', 'Masters of Code')

const link = document.querySelector('.masters-of-code-link')
console.log(link.href)
console.log(link.getAttribute('href'))
const link2 = document.querySelector('.nav__link--btn')
console.log(link2.href)
console.log(link2.getAttribute('href'))

// Data attributes
console.log(logo.dataset.versionNumber)

// Classes
logo.classList.add('a', 'b')
logo.classList.remove('a', 'b')
logo.classList.toggle('a')
logo.classList.contains('c')

// Не использовать
// logo.className = 'a'
*/
