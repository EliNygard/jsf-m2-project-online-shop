import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Pages/Home";
import { Products } from "./Components/Products";
import { RouteNotFound } from "./Components/Pages/NotFound";
import { Contact } from "./Components/Pages/Contact";
import { ProductPage } from "./Components/Pages/ProductPage";

export default function App() {
  const [filterText, setFilterText] = useState("");
  const [items, setItems] = useState([]);
  // state for holding out loading state
  const [isLoading, setIsLoading] = useState(false);
  // state for holding our error state
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        // reset the error state is vase there is an error previously
        setIsError(false);
        // turn on the loading state each time we do an api call
        setIsLoading(true);

        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const json = await response.json();
        setItems(json.data);
        console.log(json.data);

        // clear the loading state after successfully fetching data
        setIsLoading(false);
      } catch {
        // clear the loading state if we get an error and then set our error state to true
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading data. Please try again</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                filterText={filterText}
                setFilterText={setFilterText}
                items={items}
              />
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
