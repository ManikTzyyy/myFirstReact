import { useEffect, useState } from "react";
import ProductCard from "../components/fragments/ProductCard";
import { getProduct } from "../service/product.service";
import { Truncate } from "@re-dev/react-truncate";
import Input from "../components/elements/input/input";
import { Button, ButtonWhite } from "../components/elements/button";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/fragments/TableCart";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slice/cartSlice";

const APIProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
      setFilteredItem(data);
    });
  }, []);

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



  const dispatch = useDispatch();

  const [clearTrigger, setClearTrigger] = useState(false);

  const handleClearList = () => {
    localStorage.removeItem("cart-product");
    dispatch(clearCart());
    setClearTrigger((prev) => !prev);
  };

  useLogin()

  return (
    <div className="w-full relative">
      
      <div className="flex flex-col items-center justify-start min-h-screen p-3">
        <h1 className="pb-10">Online Products with API</h1>
        <div className="flex ">
          <div>
            <div className="px-5">
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
                      <ProductCard.Image
                        src={product.image}
                        link={`/product/${product.id}`}
                      />
                      <ProductCard.Body name={product.title}>
                        <Truncate>{product.description}</Truncate>
                      </ProductCard.Body>
                      <ProductCard.Footer
                        price={product.price}
                        id={product.id}
                        isIDR={false}
                      />
                    </ProductCard>
                  );
                })}
            </div>
          </div>
          <div className="w-1/2 border p-2 shrink-0 h-fit ">
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

            <TableCart
              products={products}
              clearTrigger={clearTrigger}
            ></TableCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIProductPage;
