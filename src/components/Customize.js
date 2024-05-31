import Input from "./Input";

export default function Customize({
  type,
  onSlider,
  setCapital,
  setSmall,
  setNumbers,
  setSymbols,
  onChange,
}) {
  return (
    <div className="customize-pass">
      <p className="description" id="custom">
        Customize your password:
      </p>
      <div className="select-section">
        <div className="range-slider">
          <p className="description">
            Password Length : <span id="display-length">{type["slider"]}</span>
          </p>
          <Input
            type={"range"}
            min={"1"}
            max={"50"}
            value={type["slider"]}
            className={"slider"}
            id={"input-length"}
            onInput={onSlider}
            onChange={onChange}
          />
        </div>
        <Input
          type={"checkbox"}
          className={"checkbox"}
          id={"capital"}
          value={type["capital"]}
          onInput={setCapital}
          onChange={onChange}
        >
          Uppercase
        </Input>
        <Input
          type={"checkbox"}
          className={"checkbox"}
          id={"small"}
          value={type["small"]}
          onInput={setSmall}
          onChange={onChange}
        >
          Lowercase
        </Input>
        <Input
          type={"checkbox"}
          className={"checkbox"}
          id={"numbers"}
          value={type["numbers"]}
          onInput={setNumbers}
          onChange={onChange}
        >
          Numbers
        </Input>

        <Input
          type={"checkbox"}
          className={"checkbox"}
          id={"symbols"}
          value={type["symbols"]}
          onInput={setSymbols}
          onChange={onChange}
        >
          Symbols
        </Input>
      </div>
    </div>
  );
}
