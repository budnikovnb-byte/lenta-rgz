const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

menuButton.addEventListener('click', () => {

    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');

});

overlay.addEventListener('click', () => {

    sideMenu.classList.remove('active');
    overlay.classList.remove('active');

});