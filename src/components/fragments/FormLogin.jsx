import InputForm from "../elements/input";
import { Button, ButtonWhite } from "../elements/button/index";
import { useEffect, useRef, useState } from "react";
import { login } from "../../service/auth.service";

export default function FormLogin() {
  const [failedLogin, setFailedLogin] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, response) => {
      if (status) {
        localStorage.setItem("token", response);
        console.log("berhasil login");
        window.location.href = "/product-api";
      } else {
        console.log("gagal login");
        setFailedLogin(response);
      }
    });

    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);

    // console.log(`email : ${email}, password : ${password}`);
    // console.log("success");

    // window.location.href = "/product";
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {failedLogin && <p className="text-red-500 text-center">{failedLogin}</p>}
      <InputForm
        label="Username"
        placeHolder="John Doe"
        name="username"
        type="text"
        ref={usernameRef}
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

      <Button type="submit">Login</Button>
      <div className="py-2"></div>
    </form>
  );
}
