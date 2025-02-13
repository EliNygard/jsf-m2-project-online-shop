import CartDisplay from "./Components/CartDisplay";
import { ProductList } from "./Components/ProductsList";
import "./App.css";
import Header from "./Components/Header";
import { SearchBar } from "./Components/SearchBar";
import { useState } from "react";

export default function App() {
  const [filterText, setFilterText] = useState("")

  return (
    <div className="App">
      <Header />
      <div className="shop-wrapper">
        <section>
          <h2>Cart</h2>
          <CartDisplay />
        </section>
        <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        />
        <section>
          <h2>Products</h2>
          <ProductList filterText={filterText} />
        </section>
      </div>
    </div>
  );
}
