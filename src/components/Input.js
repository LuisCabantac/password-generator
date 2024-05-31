export default function Input({
  type,
  className,
  min,
  max,
  id,
  value,
  onInput,
  onChange,
  children,
}) {
  return (
    <>
      <input
        type={type}
        className={className}
        min={min ? min : null}
        max={max ? max : null}
        id={id}
        value={value}
        onChange={(e) =>
          type === "range"
            ? (onInput(+e.target.value), onChange())
            : type === "text"
            ? onInput(e.target.value)
            : (onInput(!value), onChange())
        }
        checked={value}
      />
      {children && <label htmlFor={id}>{children}</label>}
    </>
  );
}
