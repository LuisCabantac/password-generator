import Strength from "./Strength";

export default function Logo({ length, checkedBox, password }) {
  return (
    <>
      <h1>Password Generator</h1>
      <p className="description">Create Strong, Unique Passwords Instantly</p>
      <div className="check-strength">
        <p>Generated password:</p>
        <Strength length={length} checkedBox={checkedBox} password={password} />
      </div>
    </>
  );
}
