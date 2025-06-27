import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/icon";

function ProductCard(props) {
  const { children } = props;
  return <div className="bg-stone-900 max-w-1/4 text-white">{children}</div>;
}

function Image(props) {
    const {src, link} = props;
  return (
    <a href={link}>
      <img src={src} alt="hat" />
    </a>
  );
}

function Body(props) {
    const {title, children} = props;
  return (
    <div className="p-2">
      <h2 className="text-base font-bold">{title}</h2>
      <p className="text-xs text-stone-500">{children}</p>
    </div>
  );
}

function Footer(props) {
    const {price, link} = props;
  return (
    <div className="flex justify-between p-2 ">
      <p>
        IDR <span>{price}</span>
      </p>
      <a href={link}>
        <FontAwesomeIcon icon="cart-shopping" />
      </a>
    </div>
  );
}
ProductCard.Image = Image;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;
