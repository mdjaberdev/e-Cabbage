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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/loging" element={<Loging />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
