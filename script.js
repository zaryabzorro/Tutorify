let menu = document.querySelector('menu-icon');
let navbarr = document.querySelector('.navbarr');

menu.onclick = () => {
    navbarr.classList.toggle('open');
}