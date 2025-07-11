import { useEffect, useState } from "react";
import ProductCard from "../components/fragments/ProductCard";
import { getProduct } from "../service/product.service";
import { Truncate } from '@re-dev/react-truncate'


const APIProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-3">
      <h1>Online Products with API</h1>
      <div className="flex flex-wrap w-1/2 justify-center py-1 gap-5 w-full">
        {!!products.length &&
          products.map((product) => {
            return (
              <ProductCard key={product.id}>
                <ProductCard.Image src={product.image} />
                <ProductCard.Body name={product.title}>
                  <Truncate>{product.description}</Truncate>
                </ProductCard.Body>
                <ProductCard.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={() => {}}
                />
              </ProductCard>
            );
          })}
      </div>
    </div>
  );
};

export default APIProductPage;
