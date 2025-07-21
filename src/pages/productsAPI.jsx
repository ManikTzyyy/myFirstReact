import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/fragments/ProductCard";
import { getProduct } from "../service/product.service";
import { Truncate } from "@re-dev/react-truncate";
import Input from "../components/elements/input/input";
import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/layout/Navbar";
import { DarkMode } from "../context/DarkMode";

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

  // useLogin();

  //darkmode
  const { isDarkMode } = useContext(DarkMode);

  return (
    <div className={`w-full relative ${isDarkMode?"bg-slate-950 text-white":"bg-white text-black"}`}>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-start min-h-screen p-3">
        <h1 className="pb-3">Online Products with API</h1>
        <div className="flex">
          <div>
            <div className="px-5 pb-10 ">
              <p>Search Product Here</p>
              <Input
                placeHolder="input some text"
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
      
        </div>
      </div>
    </div>
  );
};

export default APIProductPage;
