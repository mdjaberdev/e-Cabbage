import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        {" "}
        {/* ২. এখানে CartProvider দিয়ে র‍্যাপ করুন */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
