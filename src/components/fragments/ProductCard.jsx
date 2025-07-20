import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/icon";
import { Truncate } from "@re-dev/react-truncate";
import { addToCart } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

function ProductCard(props) {
  const { children } = props;
  return (
    <div className="bg-stone-900 h-96 w-64 text-white relative">{children}</div>
  );
}

function Image(props) {
  const { src, link } = props;
  return (
    <a href={link}>
      <div className="relative h-64 w-full">
        <img
          src={src}
          alt="hat"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </a>
  );
}

function Body(props) {
  const { name, children } = props;
  return (
    <div className="p-2">
      <Truncate>
        <h2 className="text-base font-bold">{name}</h2>
      </Truncate>
      <p className="text-xs text-stone-500">{children}</p>
    </div>
  );
}

function Footer(props) {
  const { price, id, isIDR = true } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-2 ">
      <p>
        {isIDR ? (
          <span>
            {price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </span>
        ) : (
          `$ ${price}`
        )}
      </p>
      <button
        className="hover:cursor-pointer"
        // onClick={() => {
        //   {
        //     handleAddToCart(id);
        //   }
        // }}
        onClick={() => {
          dispatch(addToCart({ id: id, qty: 1 }));
        }}
      >
        <FontAwesomeIcon icon="cart-shopping" />
      </button>
    </div>
  );
}
ProductCard.Image = Image;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;
