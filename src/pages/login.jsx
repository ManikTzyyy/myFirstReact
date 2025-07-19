import AuthLayout from "../components/layout/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";

export default function LoginPage() {
  return (
    <>
      <ul className="flex justify-center items-center gap-5">
        <li>username : johnd</li>
        <li>password : m38rmF$</li>
      </ul>
      <AuthLayout title="Login" type="login">
        <FormLogin />
      </AuthLayout>
    </>
  );
}
