const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_-{}[]|:;'"<.>,?`;
let passwordEl = document.querySelector("#password-el");

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * characters.length);
    return randomNumber;
}

function getTwelveCharacters() {
    let password = "";
    for (let i = 0; i < 12; i++) {
        let generateNumber = getRandomNumber()
        password += characters[generateNumber];
    }
    passwordEl.textContent = password;
}

function getSixteenCharacters() {
    let password = "";
    for (let i = 0; i < 16; i++) {
        let generateNumber = getRandomNumber()
        password += characters[generateNumber];
    }
    passwordEl.textContent = password;
}

function getTwentyCharacters() {
    let password = "";
    for (let i = 0; i < 20; i++) {
        let generateNumber = getRandomNumber()
        password += characters[generateNumber];
    }
    passwordEl.textContent = password;
}

function getTwentyFourCharacters() {
    let password = "";
    for (let i = 0; i < 24; i++) {
        let generateNumber = getRandomNumber()
        password += characters[generateNumber];
    }
    passwordEl.textContent = password;
}

function resetPassword() {
    let password = "Your password will be generated here...";
    passwordEl.textContent = password;
}