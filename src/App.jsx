import CartDisplay from "./Components/CartDisplay";
import { ProductList } from "./Components/ProductsList";
import "./App.css";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="shop-wrapper">

      <section>
        <h2>Products</h2>
        <ProductList />
      </section>
      <section>
        <h2>Cart</h2>
        <CartDisplay />
      </section>
      </div>
    </div>
  );
}
