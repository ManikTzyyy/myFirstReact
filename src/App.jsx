import Button from "./components/elements/button/index";

function App() {
  return (
    <div className="flex justify-center items-center  h-screen relative bg-amber-300">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2 text-white">Login</h1>
        <p className="font-medium text-slate-500 mb-5">
          Welcome, Please enter your detail
        </p>

        <form action="">
          <div className="mb-3"></div>
          <div className="mb-3"></div>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
