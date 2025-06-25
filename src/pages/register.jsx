import AuthLayout from "../components/layout/AuthLayout";
import FormRegister from "../components/fragments/FormRegister";

export default function RegisterPage() {
  return (
    <AuthLayout title="Register">
      <FormRegister />
    </AuthLayout>
  );
}
