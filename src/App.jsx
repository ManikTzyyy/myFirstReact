import {Button, ButtonWhite} from "./components/elements/button/index";

function App() {
  return (
    <div className="flex justify-center items-center  h-screen relative bg-amber-300">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2 text-white">Login</h1>
        <p className="font-medium text-blue-950 mb-5">
          Welcome, Please enter your detail
        </p>

        <form action="">
          <div className="mb-3">
            <label htmlFor="email" className="block font-medium text-blue-950">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border px-2 py-1.5 border-stone-500 rounded-md "
            />
          </div>
          <div className="">
            <label
              htmlFor="Password"
              className="block font-medium text-blue-950"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="******"
              className="w-full border px-2 py-1.5 border-stone-500 rounded-md "
            />
          </div>
          <div className="mb-3 text-end text-sm text-stone-700">
            {" "}
            <a href="">Forgot Password?</a>
          </div>

          <Button>Login</Button>
          <div className="py-2"></div>
          <ButtonWhite>Register</ButtonWhite>
        </form>
      </div>
    </div>
  );
}

export default App;
