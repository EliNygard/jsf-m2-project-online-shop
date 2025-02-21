import React, { createContext, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Pages/Home";
import { Products } from "./Components/Pages/Products"
import { RouteNotFound } from "./Components/Pages/NotFound";
import { Contact } from "./Components/Pages/Contact";
import { ProductPage } from "./Components/Pages/ProductPage";
import BaseButton from "./Components/BaseButton";
import "./App.css";

interface Theme {
  backgroundColor: string;
  color: string;
  padding: string;
}

const themes: { [key in "light" | "dark"]: Theme } = {
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

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Initialize context with undefined and handle it in the consumer.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function App() {
  const [filterText, setFilterText] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={themes[theme]}>
          <ChangeThemeComponent />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Home filterText={filterText} setFilterText={setFilterText} />
                }
              />
              <Route path="products" element={<Products />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

function ChangeThemeComponent() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ChangeThemeComponent must be used within a ThemeContext provider");
  }
  const { theme, toggleTheme } = context;
  return (
    <div>
      <BaseButton onClick={toggleTheme}>
        Change theme to {theme === "dark" ? "light" : "dark"}
      </BaseButton>
    </div>
  );
}
