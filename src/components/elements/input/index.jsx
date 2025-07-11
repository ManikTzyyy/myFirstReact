import Input from "./input";
import Label from "./label";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, type, placeHolder, name } = props;
  return (
    <div className="mb-3">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeHolder={placeHolder}
        ref={ref}
      ></Input>
    </div>
  );
});

export default InputForm;
