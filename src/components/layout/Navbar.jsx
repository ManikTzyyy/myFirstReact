import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { ButtonWhite } from "../elements/button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const [totalCart, setTotalCart] = useState(0);

  const userName = useLogin();
  return (
    <div className="w-full bg-stone-950 p-2 flex justify-between items-center text-white gap-5 sticky top-0 left-0 z-50">
      <div className="bg-white text-black p-2 rounded-md">
        Total Cart : {totalCart}
      </div>
      <div className="flex gap-2 items-center justify-center">
        <h1>Hallo, {userName}</h1>
        <ButtonWhite onClick={handleLogout}>Logout</ButtonWhite>
      </div>
    </div>
  );
};

export default Navbar;
