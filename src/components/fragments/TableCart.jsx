import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products, clearTrigger } = props;
  const cart = useSelector((state) => {
    return state.cart.data;
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      if (cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
          const product = products.find((product) => product.id === item.id);
          return acc + product.price * item.qty;
        }, 0);
        setTotalPrice(sum);
        localStorage.setItem("cart-product", JSON.stringify(cart));
      }
    }
  }, [cart, products]);

  useEffect(() => {
    setTotalPrice(0);
  }, [clearTrigger]);

  return (
    <table className="text-left table-auto border-separate border-spacing-x-5 text-xs w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => item.id === product.id);

            if (!product) {
              return null;
            }
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>$ {product.price}</td>
                <td>{item.qty}</td>
                <td>$ {product.price * item.qty}</td>
              </tr>
            );
          })}
        <tr className="font-bold">
          <td colSpan={4}>Total</td>
          <td>$ {totalPrice}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
