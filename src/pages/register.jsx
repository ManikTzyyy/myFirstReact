import AuthLayout from "../components/layout/AuthLayout";
import FormRegister from "../components/fragments/FormRegister";

export default function RegisterPage() {
  return (
    <AuthLayout title="Register">
      <FormRegister />
       <p className="text-center text-sm">
        Already have an account{" "}
        <a href="/login" className="text-blue-500">
          Sign in here
        </a>
      </p>
    </AuthLayout>
  );
}
