import { useEffect } from "react";
import { useSelector } from "react-redux";

const CartDisplay = () => {
  const products = useSelector((state) => state.cart.products);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  useEffect(() => {
    console.log("Cart products: ", products);
    console.log("Cart total: ", cartTotal);
  }, [products, cartTotal]);

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              {product.title} - {product.price}
            </div>
            <div>Quantity: {product.quantity} </div>
          </li>
        ))}
      </ul>
      <div>
        <div>Total: {cartTotal.toFixed(2)} </div>
      </div>
    </>
  );
};

export default CartDisplay;
