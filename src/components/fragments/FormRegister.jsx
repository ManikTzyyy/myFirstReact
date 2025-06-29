import InputForm from "../elements/input";
import { Button, ButtonWhite } from "../elements/button/index";

export default function FormRegister() {
  const handleRegister = (e)=>{
    e.preventDefault();
    console.log('register');
  }
  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="Full Name"
        placeHolder="Manik Hengki"
        name="text"
        type="text"
      ></InputForm>
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
        name="confirm-password"
        type="password"
      ></InputForm>

      <Button type='submit'>Register</Button>
      <div className="py-2"></div>
    </form>
  );
}
