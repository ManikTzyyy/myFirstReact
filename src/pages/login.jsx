import AuthLayout from "../components/layout/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Sign up here
        </Link>
      </p>
    </AuthLayout>
  );
}
