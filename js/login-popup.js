let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
let loginPopup = document.querySelector('.page popup-backdrop');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();
    loginPopup.classList.toggle('show-popup');
    loginPopup.classList.toggle('popup-backdrop');
}