import Input from "./Input";

export default function InputSection({ input, onTypeInput, onInput }) {
  return (
    <div className="top-section">
      <Input
        id={"password-el"}
        type={"text"}
        className={"input-box"}
        onInput={onTypeInput}
        value={input}
      />
      <div>
        <button id="generate" title="Generate" onClick={() => onInput()}>
          <span className="material-symbols-outlined"> restart_alt </span>
        </button>
        <button
          id="copy-btn"
          title="Copy"
          onClick={async () => await navigator.clipboard.writeText(input)}
        >
          <span className="material-symbols-outlined"> content_copy </span>
        </button>
      </div>
    </div>
  );
}
