import FormLogin from "../fragments/FormLogin";
import { Link } from "react-router-dom";
export default function AuthLayout(props) {
  const { title, children, type } = props;
  return (
    <div className="flex justify-center items-center  h-screen relative bg-amber-300">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2 text-white">{title}</h1>
        <p className="font-medium text-blue-950 mb-5">
          Welcome, Please enter your detail
        </p>
        <div>
          {children}

          <p className="text-center text-sm">
            {type === "login"
              ? "Don't have an account? "
              : "Already have an account? "}

            {type === "login" && (
              <Link to="/register" className="text-blue-500">
                Sign up here
              </Link>
            )}

            {type === "register" && (
              <Link to="/login" className="text-blue-500">
                Sign in here
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
