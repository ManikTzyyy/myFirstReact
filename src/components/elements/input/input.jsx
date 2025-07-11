import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeHolder, name } = props;
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className="w-full border px-2 py-1.5 border-stone-500 rounded-md "
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
