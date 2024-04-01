const characters = {
  uppercase: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
  lowercase: `abcdefghijklmnopqrstuvwxyz`,
  numbers: `0123456789`,
  symbols: `!@#$%&*()_-{}[]|:;'"<.>,?`,
};
const passwordEl = document.querySelector("#password-el");
document
  .querySelector("#input-length")
  .addEventListener("change", function (event) {
    document.querySelector("#display-length").textContent = event.target.value;
    checkCheckbox();
  });

document.querySelectorAll(".checkbox").forEach((el) => {
  el.addEventListener("change", function (event) {
    checkCheckbox();
  });
});

function checkCheckbox() {
  const checkboxes = document.querySelectorAll(".checkbox");
  const length = Number(document.querySelector("#input-length").value);
  let allChar = "";
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      if (checkbox.value === "capital") allChar += characters.uppercase;
      if (checkbox.value === "small") allChar += characters.lowercase;
      if (checkbox.value === "numbers") allChar += characters.numbers;
      if (checkbox.value === "speccharacters") allChar += characters.symbols;
    }
    if (allChar !== "") generate(length, allChar);
  });
}

function getRandomNumber(characters) {
  let randomNumber = Math.floor(Math.random() * characters.length);
  return randomNumber;
}

function generate(amountChar, characters) {
  let password = "";
  for (let i = 0; i < amountChar; i++) {
    let generateNumber = getRandomNumber(characters);
    password += characters[generateNumber];
  }

  passwordEl.value = password;
}

document.querySelector("#generate").addEventListener("click", checkCheckbox);

document.querySelector("#copy-btn").addEventListener("click", function () {
  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordEl.value);
});
