const Button = (props) => {
  return (
    <button
      type="button"
      className={`rounded px-6 pb-2 pt-2.5 text-xs font-medium text-white bg-blue-700`}
    >
      {props.children}
    </button>
  );
};

const Button2 = (props) => {
  const { text = "..." } = props;
  return (
    <button
      type="button"
      className={`rounded px-6 pb-2 pt-2.5 text-xs font-medium text-white bg-blue-700`}
    >
      {text}
    </button>
  );
};

function App() {
  return (
    <>
      <div className="flex-col justify-center items-center gap-5 min-h-screen bg-amber-300">
        <div className="flex justify-center items-center gap-5">
          <Button>Login</Button>
          <Button>Logout</Button>
        </div>
         <h2 className="text-center text-white">
            Ini adalah button yang menggunakan teknik distructuring pada propsnya
          </h2>
        <div className="flex justify-center items-center gap-5">
         
          <Button2 text="Hello"></Button2>
          <Button2></Button2>
        </div>
      </div>
    </>
  );
}

export default App;
