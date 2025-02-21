import { useDispatch } from "react-redux";
import { addProduct } from "../../features/cart/cartSlice";
import styles from "./index.module.css";
import BaseButton from "../BaseButton";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { baseUrl } from "../../api/Constants";

export function ProductList({ filterText }) {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useFetch(baseUrl);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Could not get product</div>;
  }

  // Filter products based on the filterText (case-insensitive)
  const filteredProducts = data.filter(
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
};
