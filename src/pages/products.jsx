import { useEffect, useRef, useState } from "react";
import { Button } from "../components/elements/button";
import ProductCard from "../components/fragments/ProductCard";

const products = [
  {
    id: 1,
    img: "/images/hat.jpg",
    name: "Hat",
    desc: "Comfort hat with smooth fiber",
    price: 12133,
  },
  {
    id: 2,
    img: "/images/hat.jpg",
    name: "Hat expensive",
    desc: "Same hat, just different price",
    price: 1310,
  },
];

const email = localStorage.getItem("email");

function ProductPage() {
  const [cart, setCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id == id)) {
      setCart(
        cart.map((item) =>
          item.id == id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }

    // setCart([
    //   ...cart,
    //   {
    //     id,
    //     qty: 1,
    //   },
    // ]);
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <div className="flex flex-col">
      <div className="px-2 py-3 flex justify-end items-center bg-amber-300 w-full gap-2">
        <p>Hallo, {email}</p>
        <div className="w-24">
          <Button onClick={handleLogout}>Log out</Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap w-1/2 justify-center py-1 gap-5">
          {products.map((product) => {
            return (
              <ProductCard key={product.id}>
                <ProductCard.Image src={product.img} />
                <ProductCard.Body name={product.name}>
                  {product.desc}
                </ProductCard.Body>
                <ProductCard.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </ProductCard>
            );
          })}
        </div>
        <div className="bg-slate-50 p-2 ">
          <h1 className="font-bold text-xl">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5 text-xs">
            <thead>
              <tr>
                <th>id</th>
                <th>product</th>
                <th>price</th>
                <th>qty</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => item.id === product.id
                );
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total</b>
                </td>
                <td>
                  <b>
                    Rp.{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
