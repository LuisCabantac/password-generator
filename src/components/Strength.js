export default function Strength({ length, checkedBox, password }) {
  const backgroundColor =
    length < 5 && checkedBox < 2
      ? "#ff7800"
      : length < 8
      ? "#ffb370"
      : length < 10
      ? "#ffddbf"
      : length < 14 || checkedBox < 4
      ? "#d5f2a5"
      : "#9ae437";
  const message =
    length < 5 && checkedBox < 2
      ? "Very Weak"
      : length < 8
      ? "Weak"
      : length < 10
      ? "Good"
      : length < 14 || checkedBox < 4
      ? "Strong"
      : "Very Strong";
  if (!password || !checkedBox) return;
  return (
    <p id="password-strength" style={{ backgroundColor: backgroundColor }}>
      {message}
    </p>
  );
}
