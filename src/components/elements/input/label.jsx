const Label = (props) => {
  const { text, htmlfor } = props;
  return (
    <label
      htmlFor={htmlfor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {text}
    </label>
  );
};

export default Label