import ProductCard from "../components/fragments/ProductCard";

const products = [
  {
    id: "1",
    img: "/images/hat.jpg",
    name: "Hat",
    desc: "Comfort hat with smooth fiber",
    price: "212",
  },
   {
    id: "2",
    img: "/images/hat.jpg",
    name: "Hat but more expensive",
    desc: "Same hat, just different price",
    price: "9999",
  },
];

function ProductPage() {
  return (
    <div className="flex justify-center py-1">
      {products.map((product) => {
        return (
          <ProductCard key={product.id}>
            <ProductCard.Image src={product.img} />
            <div className="flex-col justify-between h-full">
              <ProductCard.Body name={product.name}>
                {product.desc}
              </ProductCard.Body>
              <ProductCard.Footer price={product.price} />
            </div>
          </ProductCard>
        );
      })}
    </div>
  );
}

export default ProductPage;
