import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Pages from "./components/pages/Pages";
import Contacts from "./components/pages/Contacts";
import Loging from "./components/pages/Loging";
import Blog from "./components/pages/Blog";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import FloatingCart from "./components/common/FloatingCart";
// import CabbageBlogPage from "./components/pages/CabbageBlogPage";

function App() {
  return (
    <>
      <FloatingCart />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/loging" element={<Loging />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
