/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ProductCard from "../components/fragments/ProductCard";
import { getProduct } from "../service/product.service";
import { Truncate } from "@re-dev/react-truncate";
import Input from "../components/elements/input/input";
import { Button, ButtonWhite } from "../components/elements/button";
import { useLogin } from "../hooks/useLogin";


const APIProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
      setFilteredItem(data);
    });
  }, []);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart-product")) || []);
   
  }, []);

  const handleClearList = () => {
    localStorage.clear("cart-product");
    setCart(JSON.parse(localStorage.getItem("cart-product")) || []);
    setTotalPrice(0);
  };

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
  }, [cart]);

  const cartButton = (id) => {
    if (cart.find((item) => item.id === id)) {
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
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  const [searchItem, setSearchItem] = useState("");
  const [filteredItem, setFilteredItem] = useState(products);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const result = products.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredItem(result);
  };



  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const userName = useLogin();

  return (
    <div className="w-full relative">
      <div className="w-full bg-stone-950 p-2 flex justify-end items-center text-white gap-5">
        <h1>Hallo, {userName}</h1>
        <ButtonWhite onClick={handleLogout}>Logout</ButtonWhite>
      </div>
      <div className="flex flex-col items-center justify-start min-h-screen p-3">
        <h1 className="pb-10">Online Products with API</h1>
        <div className="flex ">
          <div>
            <div className="sticky top-4 left-0 z-50 px-5">
              <Input
                placeHolder="Search Product"
                value={searchItem}
                type="text"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-wrap  justify-center py-1 gap-5 w-full relative">
              {!!products.length &&
                filteredItem.map((product) => {
                  return (
                    <ProductCard key={product.id}>
                      <ProductCard.Image src={product.image} link={`/product/${product.id}`} />
                      <ProductCard.Body name={product.title}>
                        <Truncate>{product.description}</Truncate>
                      </ProductCard.Body>
                      <ProductCard.Footer
                        price={product.price}
                        id={product.id}
                        handleAddToCart={() => {
                          cartButton(product.id);
                        }}
                        isIDR={false}
                      />
                    </ProductCard>
                  );
                })}
            </div>
          </div>
          <div className="w-1/2 border p-2 shrink-0 sticky top-4 h-fit ">
            <div className="flex justify-between">
              <h1 className="font-bold">Product Cart</h1>
              <div className="w-fit">
                <Button onClick={handleClearList}>Clear List</Button>
              </div>
            </div>
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
                    const product = products.find(
                      (product) => item.id === product.id
                    );

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIProductPage;
