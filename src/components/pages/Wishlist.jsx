import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import Container from "../common/Container";
import Images from "../common/Images";
import { AiOutlineDelete, AiOutlineShopping } from "react-icons/ai";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="py-12 md:py-16 lg:py-20 bg-gray-50 min-h-[70vh]">
      <Container>
        <h2 className="text-3xl font-bold font-Inter text-gray-900 mb-8 text-center lg:text-left">
          My Wishlist ({wishlistItems.length})
        </h2>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-red-50 text-red-400 rounded-full flex items-center justify-center mb-4">
              <AiOutlineShopping size={38} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              You haven't added any products to your wishlist yet.
            </p>
            <Link
              to="/shop"
              className="bg-[#80B500] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#6e9c00] transition-all cursor-pointer"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 p-4 rounded-2xl flex flex-col justify-between relative group shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 z-10 bg-white/80 p-2 rounded-full text-gray-400 hover:text-red-500 shadow-sm transition-colors cursor-pointer"
                  title="Remove"
                >
                  <AiOutlineDelete size={18} />
                </button>

                <Link to={`/product/${item.id}`} className="block">
                  <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 p-4 flex items-center justify-center">
                    <Images
                      srcImg={item.productImg}
                      className="max-h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 line-clamp-1 mb-1 hover:text-[#80B500] transition-colors">
                    {item.productTitle}
                  </h4>
                </Link>

                <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-100">
                  <span className="text-[#80B500] font-bold font-Nunito text-base">
                    {item.productPrice}
                  </span>
                  <button
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        productTitle: item.productTitle,
                        productPrice: item.productPrice,
                        productImg: item.productImg,
                        stock: item.stock,
                      })
                    }
                    className="bg-[#80B500] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#6e9c00] transition-colors cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
