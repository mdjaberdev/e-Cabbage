import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Container from "../common/Container";
import ShopControls from "../shop/ShopControls";
import ProductGrid from "../shop/ProductGrid";
import ShopPagination from "../shop/ShopPagination";
import ShopBanner from "../shop/ShopBanner";


const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  return (
    <div className="bg-white overflow-x-hidden">
      <Helmet>
        <title>Cabbage Shop - Organic Store</title>
        <meta
          name="description"
          content="Explore our fresh organic veggies, fruits and grocery items."
        />
      </Helmet>

      <ShopBanner />

      <Container>
        <ShopControls
          allProducts={allProducts}
          setFilteredProducts={setFilteredProducts}
          viewMode={viewMode}
          setViewMode={setViewMode}
          perPage={perPage}
          setPerPage={setPerPage}
          setCurrentPage={setCurrentPage}
        />
        <ProductGrid
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
          loading={loading}
          setLoading={setLoading}
          viewMode={viewMode}
          currentPage={currentPage}
          perPage={perPage}
        />

        <ShopPagination
          totalProducts={filteredProducts.length}
          perPage={perPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </div>
  );
};

export default Shop;
