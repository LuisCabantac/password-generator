const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_-{}[]|:;'"<.>,?`;
let passwordEl = document.querySelector("#password-el");

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * characters.length);
    return randomNumber;
}

function generatePassword() {
    let password = "";
    for (let i = 0; i < 8; i++) {
        let generateNumber = getRandomNumber()
        password += characters[generateNumber];
    }
    passwordEl.textContent = password;
}