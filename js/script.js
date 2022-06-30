let burger = document.querySelector('.menu__burger');
let burgerMenu = document.querySelector('.menu__list');
let body = document.querySelector('body');

burger.onclick = function () {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('lock');
}

burgerMenu.onclick = function () {
    burger.classList.remove('active');
    body.classList.remove('lock');
    burgerMenu.classList.remove('active');
}
