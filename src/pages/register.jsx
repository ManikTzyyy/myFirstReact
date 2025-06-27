import AuthLayout from "../components/layout/AuthLayout";
import FormRegister from "../components/fragments/FormRegister";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <AuthLayout title="Register">
      <FormRegister />
       <p className="text-center text-sm">
        Already have an account{" "}
        <Link to="/login" className="text-blue-500">
          Sign in here
        </Link>
      </p>
    </AuthLayout>
  );
}
