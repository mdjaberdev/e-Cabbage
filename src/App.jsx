import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

import RootLayout from "./components/layouts/RootLayout";
import FloatingCart from "./components/common/FloatingCart";
import { SearchProvider } from "./context/SearchContext";
import { WishlistProvider } from "./context/WishlistContext";
import Loading from "./components/common/Loading";
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Shop = lazy(() => import("./components/pages/Shop"));
const Pages = lazy(() => import("./components/pages/Pages"));
const Blog = lazy(() => import("./components/pages/Blog"));
const Contacts = lazy(() => import("./components/pages/Contacts"));
const Loging = lazy(() => import("./components/pages/Loging"));
const Cart = lazy(() => import("./components/pages/Cart"));
const Checkout = lazy(() => import("./components/pages/Checkout"));
const ProductDetails = lazy(() => import("./components/pages/ProductDetails"));
const Wishlist = lazy(() => import("./components/pages/Wishlist"));
const Error = lazy(() => import("./components/pages/Error"));
const TrackOrder = lazy (()=> import("./components/pages/TrackOrder"))

function App() {
  return (
    <SearchProvider>
      <WishlistProvider>
        <FloatingCart />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/login" element={<Loging />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/track-order" element={<TrackOrder />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </WishlistProvider>
    </SearchProvider>
  );
}

export default App;
