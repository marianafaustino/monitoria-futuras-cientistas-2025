document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.getElementById('menu-hamburger');
    const navMenu = document.getElementById('nav-menu');

    menuHamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuHamburger.classList.toggle('active');
    });

});
