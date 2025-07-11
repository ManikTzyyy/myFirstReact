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

const LinkButton = (props)=>{
  const {children = '...', link} = props
  return(
    <a href={link} className=" bg-amber-400 text-white py-2 px-3 rounded-lg hover:bg-amber-500">
      {children}
    </a>
  )
}

export {Button, ButtonWhite, LinkButton};
