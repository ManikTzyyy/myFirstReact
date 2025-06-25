import { Children } from "react";

const Button = (props) => {
  const {children ="..."} = props
  return (
    <button
      type="button"
      className="rounded px-6 pb-2 pt-2.5 text-xs font-medium text-white w-full bg-blue-700"
    >
      {children}
    </button>
  );
};

export default Button