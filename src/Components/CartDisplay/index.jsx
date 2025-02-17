import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../cartSlice";

const CartDisplay = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  useEffect(() => {
    console.log("Cart products: ", products);
    console.log("Cart total: ", cartTotal);
  }, [products, cartTotal]);

  return (
    <>
      <h2>Cart</h2>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex flex-col items-center">
            <div>
              {product.title} - {product.price}
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <button className="bg-purple-900 text-white h-7 w-7 rounded justify-center">
                -
              </button>
              <input
                type="number"
                defaultValue={product.quantity}
                className="bg-purple-500 text-white h-7 w-7 rounded justify-center text-center text-xs"
              />
              <button className="bg-purple-900 text-white h-7 w-7 rounded justify-center">
                +
              </button>
            </div>
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
