import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";
import { Button } from "../elements/button";
import TableCart from "./TableCart";
import { ShowCartDialog } from "../../context/ShowCartDialog";
import { DarkMode } from "../../context/DarkMode";

const DialogCart = (props) => {
  const { products } = props;
  const dispatch = useDispatch();

  const [clearTrigger, setClearTrigger] = useState(false);

  const handleClearList = () => {
    localStorage.removeItem("cart-product");
    dispatch(clearCart());
    setClearTrigger((prev) => !prev);
  };

  const { isDialogCartShow } = useContext(ShowCartDialog);

  const { isDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`w-[90%] border p-2 shrink-0 h-fit absolute  top-16 left-3 ${
        isDialogCartShow ? "block" : "hidden"
      }  ${isDarkMode ? "bg-slate-800" : "bg-white"}`}
    >
      <div className="flex justify-between">
        <h1 className="font-bold">Product Cart</h1>
        <div className="w-fit">
          <Button
            onClick={() => {
              handleClearList();
            }}
          >
            Clear List
          </Button>
        </div>
      </div>

      <TableCart products={products} clearTrigger={clearTrigger}></TableCart>
    </div>
  );
};

export default DialogCart;
