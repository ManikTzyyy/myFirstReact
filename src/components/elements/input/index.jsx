import Input from "./input";
import Label from "./label";

export default function InputForm(props) {
  const { label, type, placeHolder, name } = props;
  return (
    <div className="mb-3">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeHolder={placeHolder}></Input>
    </div>
  );
}
