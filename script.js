const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_-{}[]|:;'"<.>,?`;
let passwordEl = document.querySelector("#password-el");

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * characters.length);
    return randomNumber;
}