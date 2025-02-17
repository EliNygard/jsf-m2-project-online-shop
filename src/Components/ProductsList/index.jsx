import { useDispatch } from "react-redux";
import { addProduct } from "../../cartSlice";
import styles from "./index.module.css";
import BaseButton from "../BaseButton";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function ProductList({ filterText, items }) {
  const dispatch = useDispatch();

  const products = items
  // Filter products based on the filterText (case-insensitive)
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(filterText.toLowerCase()) ||
      product.description?.toLowerCase().includes(filterText.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return (
      <>
        <p>Unfortunately we do not have what you are looking for.</p>
        <p>Try a new search. Perhaps we have something else you might like.</p>
      </>
    );
  }

  return (
    <>
      <h2>Products</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} className={styles.list}>
            <img src={product.image.url} alt={product.title} />
            <h3>{product.title}</h3>
            <BaseButton onClick={() => dispatch(addProduct(product))}>
              Add to cart
            </BaseButton>
            <Link to={`/product/${product.id}`}>
            <BaseButton>View</BaseButton>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
ProductList.propTypes = {
  filterText: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};