const Input = (props) => {
  const {type, placeholder} = props  
  return (
    <input
      type={type}
      className="bg-white border-slate-400 text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
    />
  );
};


export default Input