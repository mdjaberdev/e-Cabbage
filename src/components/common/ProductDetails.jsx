import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "../common/Container";
import { FaAngleRight } from "react-icons/fa";
import { useCart } from "../../context/CartContext"; // Apnar cart context thakle use korte paren

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(""); // Main big image control korar jonno

  // const { addToCart } = useCart(); // Jodi Global Cart Context thake

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );
        setProduct(data);
        // Product load howar por prothom image/thumbnail ta default main image set korchi
        setSelectedImage(data.thumbnail);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Jodi global cart context thake ekhane addToCart call korben
    alert(
      `${quantity} item(s) of "${product.title}" added to cart successfully!`,
    );
  };

  if (loading) {
    return (
      <Container>
        <div className="py-28 text-center text-xl font-Nunito font-bold text-[#0A2C3D]">
          Loading product details...
        </div>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <div className="py-28 text-center text-xl font-Nunito font-bold text-red-500">
          Product not found!
        </div>
      </Container>
    );
  }

  return (
    <div>
      {/* Banner */}
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-[100px]">
        <Container>
          <div>
            <h3 className="text-Primary text-[45px] font-bold font-Inter">
              Product Details
            </h3>
            <h5 className="text-[#133344] text-[18px] font-Nunito flex items-center">
              Home <FaAngleRight /> Shop <FaAngleRight /> {product.title}
            </h5>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start font-Nunito">
          {/* Left Side: Product Images (Main Display + Sample Gallery) */}
          <div className="flex flex-col gap-4">
            {/* Main Big Image Preview */}
            <div className="bg-[#F4F4F4] p-8 rounded-2xl flex justify-center items-center shadow-inner h-[400px]">
              <img
                src={selectedImage || product.thumbnail}
                alt={product.title}
                className="max-h-full max-w-full object-contain drop-shadow-lg duration-300"
              />
            </div>

            {/* Additional Sample Images / Gallery List */}
            {product.images && product.images.length > 0 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((imgUrl, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`w-20 h-20 bg-gray-100 rounded-xl border-2 p-2 flex justify-center items-center cursor-pointer duration-200 shrink-0 ${
                      selectedImage === imgUrl
                        ? "border-[#80B500] shadow-md"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`sample-${index}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Product Info */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0A2C3D]">
              {product.title}
            </h1>
            <p className="text-3xl font-bold text-[#80B500]">
              ${product.price}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {product.description}
            </p>

            <div className="flex items-center gap-4">
              <span className="font-bold text-[#0A2C3D]">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="px-4 py-2 bg-gray-100 text-lg font-bold hover:bg-gray-200 duration-200 cursor-pointer"
                >
                  -
                </button>
                <span className="px-6 py-2 font-semibold text-[#0A2C3D]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 bg-gray-100 text-lg font-bold hover:bg-gray-200 duration-200 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-2 bg-[#80B500] text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-[#6da000] duration-300 w-fit cursor-pointer shadow-lg shadow-[#80B500]/30"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
