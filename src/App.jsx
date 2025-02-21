import "./App.css";
import { createContext, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Pages/Home";
// import { Products } from "./Components/ProductSingle";
import { RouteNotFound } from "./Components/Pages/NotFound";
import { Contact } from "./Components/Pages/Contact";
import { ProductPage } from "./Components/Pages/ProductPage";
import BaseButton from "./Components/BaseButton";

const ThemeContext = createContext();

const themes = {
  dark: {
    backgroundColor: "#222",
    color: "#eee",
    padding: "1rem",
  },
  light: {
    backgroundColor: "#fff",
    color: "#111",
    padding: "1rem",
  },
};

export default function App() {
  const [filterText, setFilterText] = useState("");
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={themes[theme]}>
        <ChangeThemeComponent></ChangeThemeComponent>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home filterText={filterText} setFilterText={setFilterText} />
            }
          ></Route>
          {/* <Route path="products" element={<Products />}></Route> */}
          <Route path="product/:id" element={<ProductPage />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<RouteNotFound />}></Route>
        </Route>
      </Routes>
              </div>
      </ThemeContext.Provider>
    </div>
  );
}

function ChangeThemeComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <BaseButton onClick={toggleTheme}>
        {" "}
        Change theme to {theme === "dark" ? "light" : "dark"}{" "}
      </BaseButton>
    </div>
  );
}
