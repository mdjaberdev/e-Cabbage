import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Container from "../common/Container";
import { FaAngleRight, FaStar } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  const { cartItems, addToCart } = useCart();
  const { wishlistItems, toggleWishlist } = useWishlist();

  const isLoved = product
    ? wishlistItems.some((item) => item.id === product.id)
    : false;
  const isInCart = product
    ? cartItems.some((item) => item.id === product.id)
    : false;

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );
        setProduct(data);
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
    if (!product) return;

    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        productTitle: product.title,
        productPrice: `$${product.price}`,
        productImg: product.thumbnail,
        stock: product.stock,
      });
    }

    setQuantity(1);
  };

  const handleToggleWishlist = () => {
    if (!product) return;
    toggleWishlist({
      id: product.id,
      productTitle: product.title,
      productPrice: `$${product.price}`,
      productImg: product.thumbnail,
      stock: product.stock,
    });
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
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-24 lg:py-36">
        <Container>
          <div>
            <h3 className="text-Primary text-4xl sm:text-5xl font-bold font-Inter">
              Product Details
            </h3>
            <h5 className="text-[#133344] text-base sm:text-lg font-Nunito flex items-center gap-2 mt-2">
              <Link to="/" className="hover:text-[#80B500] transition-colors">
                Home
              </Link>{" "}
              <FaAngleRight />{" "}
              <span className="truncate max-w-[250px]">{product.title}</span>
            </h5>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start font-Nunito">
          <div className="flex flex-col gap-4">
            <div className="bg-[#F4F4F4] p-8 rounded-2xl flex justify-center items-center shadow-inner h-[400px]">
              <img
                src={selectedImage || product.thumbnail}
                alt={product.title}
                className="max-h-full max-w-full object-contain drop-shadow-lg duration-300"
              />
            </div>

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
          <div className="flex flex-col gap-6">
            {product.category && (
              <span className="text-xs uppercase tracking-widest text-[#80B500] font-bold bg-[#80B500]/10 px-3 py-1 rounded-full w-fit">
                {product.category}
              </span>
            )}

            <h1 className="text-3xl lg:text-4xl font-bold text-[#0A2C3D]">
              {product.title}
            </h1>

            {product.rating && (
              <div className="flex items-center text-amber-400 gap-1">
                <FaStar />
                <span className="text-sm font-bold text-gray-800">
                  {product.rating}
                </span>
              </div>
            )}

            <p className="text-3xl font-bold text-[#80B500]">
              ${product.price}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {product.description}
            </p>

            {product.stock !== undefined && (
              <p className="text-sm font-semibold text-gray-500">
                Available Stock:{" "}
                <span className="text-gray-800 font-bold">{product.stock}</span>
              </p>
            )}

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
                  onClick={() => {
                    if (
                      product.stock !== undefined &&
                      quantity >= product.stock
                    ) {
                      return;
                    }
                    setQuantity((prev) => prev + 1);
                  }}
                  disabled={
                    product.stock !== undefined && quantity >= product.stock
                  }
                  className={`px-4 py-2 text-lg font-bold duration-200 ${
                    product.stock !== undefined && quantity >= product.stock
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-100 text-[#0A2C3D] hover:bg-gray-200 cursor-pointer"
                  }`}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={handleAddToCart}
                className={`py-4 px-10 rounded-full font-bold text-lg duration-300 cursor-pointer shadow-md flex items-center justify-center gap-2.5 ${
                  isInCart
                    ? "bg-[#80B500] text-white hover:bg-[#6e9c00]"
                    : "bg-gray-100 text-[#80B500] hover:bg-[#80B500] hover:text-white"
                }`}
              >
                <LuShoppingCart size={22} />
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </button>

              <button
                onClick={handleToggleWishlist}
                aria-label="Toggle wishlist"
                className={`p-4 rounded-full shadow-md cursor-pointer transition-all duration-300 flex items-center justify-center ${
                  isLoved
                    ? "bg-[#80B500] text-white hover:bg-[#6e9c00]"
                    : "bg-gray-100 text-[#80B500] hover:bg-[#80B500] hover:text-white"
                }`}
              >
                {isLoved ? <FaHeart size={22} /> : <FaRegHeart size={22} />}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
