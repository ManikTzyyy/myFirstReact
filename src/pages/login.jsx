import AuthLayout from "../components/layout/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";


export default function LoginPage() {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
}
