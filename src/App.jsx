import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Home";
import { Products } from "./Components/Products";
import { RouteNotFound } from "./Components/NotFound";
import { Contact } from "./Components/Contact";
import { ProductPage } from "./Components/ProductPage";

export default function App() {
  const [filterText, setFilterText] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home filterText={filterText} setFilterText={setFilterText} />
            }
          ></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="product/:id" element={<ProductPage />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<RouteNotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
