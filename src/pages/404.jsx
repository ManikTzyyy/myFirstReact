import { useRouteError } from "react-router-dom";
import { Button } from "../components/elements/button";
export default function NotFoundPage() {
  const error = useRouteError;
  return (
    <>
      <div className="flex min-h-screen px-10 flex-col justify-center items-center">
        <h1 className="text-7xl font-bold pb-4">Oops!</h1>
        <h2 className="font-medium">404 - Page Not Found</h2>
        <div className="text-sm text-center text-stone-500 pb-5">
          <p>{error.statusText || error.message}</p>
        </div>

        <Button className="shrink-0 ">Back To Home</Button>
      </div>
    </>
  );
}
