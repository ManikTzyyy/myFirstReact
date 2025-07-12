import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeHolder, name, value, onChange } = props;
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className="w-full border px-2 py-1.5 border-stone-500 rounded-md bg-white/30 backdrop-blur-sm"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
});

export default Input;
