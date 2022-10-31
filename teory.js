/////////////////////////////////////////////////
/*
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


//////////////////////////////////////////////////////////////////
// Виды событий и обработчиков событий
const h1 = document.querySelector('h1')
// new, можно удалять обработчик событий(раньше нельзя было)
/*const alertMouseEnterH1 = (e) => {
    alert('addEventListener: You are now at the h1 element')
    h1.removeEventListener('mouseenter', alertMouseEnterH1)
}*/
/*const alertMouseEnterH1 = (e) => {
    alert('addEventListener: You are now at the h1 element')

}
h1.addEventListener('mouseenter', alertMouseEnterH1)
setTimeout(() => {
    h1.removeEventListener('mouseenter', alertMouseEnterH1)
}, 3000)*/

// old, переписывает все предыдущие события
/*
h1.onclick = ((e) => {
    alert('onclick: You are now at the h1 element')
})*/

// Scroll
// Плавная прокрутка до первой секции
/*const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
btnScrollTo.addEventListener('click', (e) => {
    /!*e.preventDefault()
    const section1Coords = section1.getBoundingClientRect()
    console.log(section1Coords)
    console.log(e.target.getBoundingClientRect())
    console.log('Текущее прокручивание: x, y', window.pageXOffset, window.pageYOffset)

    console.log('Ширина и высота viewport', document.documentElement.clientWidth, document.documentElement.clientHeight)*!/

    // window.scrollTo(section1Coords.left + window.pageXOffset, section1Coords.top + window.pageYOffset)

    /!*
    window.scrollTo({
        left: section1Coords.left + window.pageXOffset,
        top: section1Coords.top + window.pageYOffset,
        behavior: "smooth"
    })
    *!/

    section1.scrollIntoView({behavior: "smooth"})
})*/


///////////////////////////////////////////
// Event Propagation
// rgb(123, 56, 78)
/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandomColor = () => {
    return `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)})`
}

document.querySelector('.nav__link').addEventListener('click', (e) => {
    this.style.backgroundColor = getRandomColor()
    console.log('Link', e.target, e.currentTarget)
    console.log(this === e.currentTarget)
    // Stop propagation
    // e.stopPropagation()
})

document.querySelector('.nav__links').addEventListener('click', (e) => {
    this.style.backgroundColor = getRandomColor()
    console.log('Links', e.target, e.currentTarget)
    console.log(this === e.currentTarget)
})

document.querySelector('.nav').addEventListener('click', (e) => {
        this.style.backgroundColor = getRandomColor()
        console.log('Nav', e.target, e.currentTarget)
        console.log(this === e.currentTarget)
    }
    // , true    // old
)

document.querySelector('body').addEventListener('click', (e) => {
    this.style.backgroundColor = getRandomColor()
    console.log('Body', e.target, e.currentTarget)
    console.log(this === e.currentTarget)
})*/