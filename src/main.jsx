import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Import the store we created
import { store } from "./store.js";
// Import the Provider from `react-redux`
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Wrap <App /> with our react-redux Provider, passing in the store
root.render(
  <BrowserRouter>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </BrowserRouter>
);
