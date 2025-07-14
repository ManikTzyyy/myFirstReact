import { LinkButton } from "../components/elements/button";

const HomePage = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen ">
      <h1 className="text-4xl ">Hello Word</h1>
      <p className="pb-5">Manik touching React</p>
      <div className="flex gap-5">
        <LinkButton link="/products">Products</LinkButton>
      </div>
    </div>
  );
};

export default HomePage;
