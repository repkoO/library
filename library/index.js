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


console.log('1.  Верстка соответстует макету - +26. Расхождения по PP менее 10 px \n 2. Контент не обрезается, скролл не появляется - +12. \n 3. Бургер с нужным функционалом и стилями - +12. \n Итого 50/50')