const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

close.addEventListener('click', () => {
    menu.classList.remove('active');
})

const loading = document.querySelectorAll('.skill__items-loading'),
    lines = document.querySelectorAll('.skill__items-reload');

loading.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});