let search = document.querySelector('.search-box');

document.querySelector('#search-icon').oneclick = () => {
    search.classList.toggle('.active');
    menu.classList.remove('.active');
}
let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').oneclick = () => {
    menu.classList.toggle('.active');
    search.classList.remove('.active');
}
// Hide Menu and Search Box on Scroll
window.onscroll = () => {
    menu.classList.toggle('.active');
    search.classList.remove('.active');
}
// Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});