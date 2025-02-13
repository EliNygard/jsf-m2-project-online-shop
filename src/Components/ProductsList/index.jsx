import { useDispatch } from "react-redux";
import { addProduct } from "../../cartSlice";
import styles from "./index.module.css";
import BaseButton from "../BaseButton";
import PropTypes from "prop-types";

export function ProductList({ filterText }) {
  const dispatch = useDispatch();

  // Filter products based on the filterText (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <ul>
      {filteredProducts.map((product) => (
        <li key={product.id} className={styles.list}>
          <img src={product.image.url} alt={product.title} />
          <h3>{product.title}</h3>
          <BaseButton onClick={() => dispatch(addProduct(product))}>
            Add to cart
          </BaseButton>
        </li>
      ))}
    </ul>
  );
}
ProductList.propTypes = {
  filterText: PropTypes.string.isRequired,
};

const products = [
  {
    id: 0,
    title: "Milk",
    price: 19.99,
    discountedPrice: 19.99,
    image: {
      url: "https://picsum.photos/id/200/200/300",
      alt: "",
    },
  },
  {
    id: 1,
    title: "Bread",
    price: 12.99,
    discountedPrice: 12.99,
    image: {
      url: "https://picsum.photos/id/100/200/300",
      alt: "",
    },
  },
  {
    id: 2,
    title: "Cheese",
    price: 25.99,
    discountedPrice: 25.99,
    image: {
      url: "https://picsum.photos/id/400/200/300",
      alt: "",
    },
  },
];
