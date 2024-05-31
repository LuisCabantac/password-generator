import { useState } from "react";
import Logo from "./components/Logo";
import InputSection from "./components/InputSection";
import Customize from "./components/Customize";
import Footer from "./components/Footer";

function App() {
  const [password, setPassword] = useState("");
  const [slider, setSlider] = useState(8);

  const [capital, setCapital] = useState(true);
  const [small, setSmall] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const type = { slider, capital, small, numbers, symbols };
  const checkedBox = [capital, small, numbers, symbols].filter(Boolean).length;

  const characters = `${capital ? `ABCDEFGHIJKLMNOPQRSTUVWXYZ` : ""}${
    small ? `abcdefghijklmnopqrstuvwxyz` : ""
  }${numbers ? `0123456789` : ""}${symbols ? `!@#$%&*()_-{}[]|:;'"<.>,?` : ""}`;

  function getRandomNumber(characters) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    return randomNumber;
  }

  function generate(amountChar, characters) {
    let password = "";
    for (let i = 0; i < amountChar; i++) {
      const generateNumber = getRandomNumber(characters);
      password += characters[generateNumber];
    }
    return password;
  }

  function handleInput(value) {
    setPassword(value);
  }

  function handlePassword() {
    if (!characters) return;
    setPassword(generate(slider, characters));
  }

  function handleSlider(value) {
    setSlider(value);
  }

  return (
    <div className="container">
      <div>
        <Logo
          length={type.slider}
          checkedBox={checkedBox}
          password={password}
        />
        <InputSection
          input={password}
          onTypeInput={handleInput}
          onInput={handlePassword}
        />
      </div>
      <Customize
        type={type}
        onSlider={handleSlider}
        setCapital={setCapital}
        setSmall={setSmall}
        setNumbers={setNumbers}
        setSymbols={setSymbols}
        onChange={handlePassword}
      />
      <Footer />
    </div>
  );
}

export default App;
