import { Button } from "../components/elements/button";
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

const email = localStorage.getItem("email");

function ProductPage() {

  const handleLogout = ()=>{
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/login'
  }

  return (
    <div className="flex flex-col items-center">
      <div className="px-2 py-3 flex justify-end items-center bg-amber-300 w-full gap-2">
        <p>Hallo, {email}</p>
        <div className="w-24">
          <Button onClick={handleLogout}>Log out</Button>
        </div>
      </div>
      <div className="flex justify-center py-1 gap-5">
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
    </div>
  );
}

export default ProductPage;
