import { useDispatch } from "react-redux";
import { addProduct } from "../../cartSlice";
import styles from './index.module.css'

export function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className={styles.list}>
            <img src={product.image.url} alt={product.title} />
            <h3>{product.title}</h3>
            <button onClick={() => dispatch(addProduct(product))}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const products = [
  {
    id: 0,
    title: "Milk",
    price: 19.99,
    discountedPrice: 19.99,
    image: {
      url: "https://picsum.photos/id/200/200/300",
      alt: ""
    }
  },
  {
    id: 1,
    title: "Bread",
    price: 12.99,
    discountedPrice: 12.99,
    image: {
      url: "https://picsum.photos/id/100/200/300",
      alt: ""
    }
  },
  {
    id: 2,
    title: "Cheese",
    price: 25.99,
    discountedPrice: 25.99,
    image: {
      url: "https://picsum.photos/id/400/200/300",
      alt: ""
    }
  },
];
