const burgerMenu = document.querySelector('.menu__icon');
const navMenu = document.querySelector('.nav__hidden')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('_active');
    navMenu.classList.toggle('_active');

})

navMenu.addEventListener('click', () => {
    navMenu.classList.remove('_active')
    burgerMenu.classList.remove('_active');
})


console.log('Выполнены все пункты ТЗ. Расхождения по pixel perfect составляют менее 10px\n1.Верстка валидная +10\n2.Вёрстка семантическая +16\n3.Вёрстка соответствует макету +54\n4.Общие требования к верстке +20 ')