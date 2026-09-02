import React, { useEffect } from "react";
import axios from "axios";
import Products from "../common/Products";
import Badge from "../common/Badge";

const ProductGrid = ({
  setAllProducts,
  filteredProducts,
  setFilteredProducts,
  loading,
  setLoading,
  viewMode,
  currentPage,
  perPage,
}) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100",
        );
        const productsData = data.products || [];
        setAllProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Error fetching shop products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [setAllProducts, setFilteredProducts, setLoading]);

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 font-Nunito">
        Loading fresh products...
      </div>
    );
  }

  if (currentProducts.length === 0) {
    return (
      <div className="col-span-full text-center py-20 text-gray-500 text-base sm:text-lg font-Nunito">
        No products found matching your search.
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 sm:gap-y-10 mt-8 sm:mt-10 mb-16 sm:mb-20"
          : "flex flex-col gap-y-5 mt-8 sm:mt-10 mb-16 sm:mb-20"
      }
    >
      {currentProducts.map((item) => {
        const rating = item.rating || 4.5;

        return (
          <div key={item.id} className="relative">
            <Products
              id={item.id}
              productImg={item.thumbnail}
              productTitle={item.title}
              productReview={`(${rating})`}
              productPrice={`$${item.price.toFixed(2)}`}
              stock={item.stock || 10}
              className={
                viewMode === "list" ? "sm:flex-row !flex-row items-center" : ""
              }
            />
            {item.discountPercentage > 0 && (
              <Badge
                className={"absolute top-2 left-2 z-10"}
                badgeTxt={`-${Math.round(item.discountPercentage)}%`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ProductGrid);
