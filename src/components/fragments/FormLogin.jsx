import InputForm from "../elements/input";
import { Button, ButtonWhite } from "../elements/button/index";

export default function FormLogin() {
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

      <div className="mb-3 text-end text-sm text-stone-700">
        <a href="">Forgot Password?</a>
      </div>

      <Button>Login</Button>
      <div className="py-2"></div>
      <ButtonWhite>Register</ButtonWhite>
    </>
  );
}
