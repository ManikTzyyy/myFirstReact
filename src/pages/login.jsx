import AuthLayout from "../components/layout/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";

export default function LoginPage() {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-center text-sm">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500">
          Sign up here
        </a>
      </p>
    </AuthLayout>
  );
}
