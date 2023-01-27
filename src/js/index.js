const openMenu = document.getElementById('openMenu');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

openMenu.addEventListener('click', toggleMenu);