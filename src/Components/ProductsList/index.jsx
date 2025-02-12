import { useDispatch } from "react-redux";
import { addProduct } from "../../cartSlice";

export function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
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
  },
  {
    id: 1,
    title: "Bread",
    price: 12.99,
    discountedPrice: 12.99,
  },
  {
    id: 2,
    title: "Cheese",
    price: 25.99,
    discountedPrice: 25.99,
  },
];
