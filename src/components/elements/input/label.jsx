export default function Label(props) {
  const { children = "...", name } = props;
  return (
    <label
      htmlFor={name}
      className="block font-medium text-blue-950"
    >
      {children}
    </label>
  );
}
