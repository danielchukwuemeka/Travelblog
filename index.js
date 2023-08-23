let body = document.querySelector('body');

//function to open the mobile menu
function openMenu() {
    document.querySelector('.mobile-navigation-body').style.display = 'block';
    body.style.position = 'fixed';
}
document.querySelector('.mobile-menu-button-open').addEventListener('click', openMenu)


//function to close the mobile menu
function closeMobileMenu() {
    document.querySelector('.mobile-navigation-body').style.display = 'none';
    body.style.position = 'initial';
}
document.querySelector('#close-button').addEventListener('click', closeMobileMenu);