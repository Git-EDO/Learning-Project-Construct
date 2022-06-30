let burger = document.querySelector('.menu__burger');
let burgerMenu = document.querySelector('.menu__list');
let body = document.querySelector('body');

burger.onclick = function () {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('lock');
}