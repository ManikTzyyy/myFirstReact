import InputForm from "../elements/input";
import { Button, ButtonWhite } from "../elements/button/index";

export default function FormRegister() {
  return (
    <>
      <InputForm
        label="email"
        placeHolder="example@gmail.com"
        name="email"
        type="text"
      ></InputForm>
      <InputForm
        label="password"
        placeHolder="*******"
        name="password"
        type="password"
      ></InputForm>
      <InputForm
        label="Confirm Password"
        placeHolder="*******"
        name="password"
        type="password"
      ></InputForm>

      <Button>Register</Button>
      <div className="py-2"></div>
      <ButtonWhite>Sign In</ButtonWhite>
    </>
  );
}
