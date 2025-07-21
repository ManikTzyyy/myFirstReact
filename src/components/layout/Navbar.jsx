import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Button } from "../elements/button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/icon";
import { getProduct } from "../../service/product.service";
import DialogCart from "../fragments/DialogCart";
import { ShowCartDialog } from "../../context/ShowCartDialog";
import { useTotalPrice } from "../../context/TotalPriceContext";

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

  const { total } = useTotalPrice();

  const userName = useLogin();

  //dark mode

  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { isDialogCartShow, setIsDialogCartShow } = useContext(ShowCartDialog);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  const userToken = localStorage.getItem("token");

  return (
    <div
      className={`w-full shadow  p-3 flex justify-between items-center text-black gap-5 sticky top-0 left-0 z-50  ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-center gap-5 text-xs font-bold text-white">
        <p className={`${isDarkMode ? "text-white" : "text-black"} `}>
          Total Price : $ {total}{" "}
        </p>
        <button
          className="w-8 h-8 bg-black rounded-full text-lg hover:cursor-pointer relative flex justify-center items-center"
          onClick={() => {
            setIsDialogCartShow(!isDialogCartShow);
          }}
        >
          <FontAwesomeIcon icon="cart-shopping" />
          <div className="bg-red-500 w-5 h-5 rounded-full text-xs flex justify-center items-center absolute -top-2 -right-2">
            {totalCart}
          </div>
        </button>
        <button
          className="w-8 h-8 bg-black rounded-full text-lg hover:cursor-pointer flex justify-center items-center"
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          <FontAwesomeIcon icon={`${isDarkMode ? "sun" : "moon"}`} />
        </button>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {userToken ? (
          <>
            <h1 className="shrink-0">Hallo, {userName}</h1>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button onClick={handleLogout}>Login</Button>
        )}
      </div>
      <DialogCart products={products}></DialogCart>
    </div>
  );
};

export default Navbar;
