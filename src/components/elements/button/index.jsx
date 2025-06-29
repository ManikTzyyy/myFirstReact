import { Children } from "react";

const Button = (props) => {
  const { children = "..." ,type ='button', onClick} = props;
  return (
    <button
      onClick={onClick}
      type={type}
      className="rounded px-6 py-2 text-xs font-medium text-white w-full bg-blue-700 hover:cursor-pointer"
    >
      {children}
    </button>
  );
};

function ButtonWhite(props) {
  const { children = "...", type } = props;
  return (
    <button
      type={type}
      className="rounded px-6 py-2 text-xs font-medium text-blue-700 w-full bg-white hover:cursor-pointer"
    >
      {children}
    </button>
  );
}

export {Button, ButtonWhite};
