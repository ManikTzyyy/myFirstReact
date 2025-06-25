
import FormLogin from "../fragments/FormLogin";
export default function AuthLayout(props) {
  const {title} = props;
  return (
    <div className="w-full max-w-sm">
      <h1 className="text-3xl font-bold mb-2 text-white">{title}</h1>
      <p className="font-medium text-blue-950 mb-5">
        Welcome, Please enter your detail
      </p>

      <form action="">
        <FormLogin />
      </form>
    </div>
  );
}
