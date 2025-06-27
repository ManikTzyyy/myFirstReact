import ProductCard from "../components/fragments/ProductCard";

function ProductPage() {
  return (
    <div className="flex justify-center py-1">
      <ProductCard>
        <ProductCard.Image src='/images/hat.jpg' />
        <ProductCard.Body title='hat'>Comfort hat with smooth fiber</ProductCard.Body>
        <ProductCard.Footer price='212' />
      </ProductCard>
    </div>
  );
}

export default ProductPage;
