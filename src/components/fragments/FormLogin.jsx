import InputForm from "../elements/input";
import { Button, ButtonWhite } from "../elements/button/index";

export default function FormLogin() {
  const handleLogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    localStorage.setItem('email' , email);
    localStorage.setItem('password' , password);

    console.log(`email : ${email}, password : ${password}`)
    console.log('success');

    window.location.href = '/product'
  }
  return (
    <form onSubmit={handleLogin}>
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

      <Button type='submit'>Login</Button>
      <div className="py-2"></div>
    </form>
  );
}
