import React, { useState } from "react";
import {
  FaAngleRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaCalendarAlt,
  FaCommentDots,
} from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdVerified, MdLocalShipping, MdEco } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Images from "../common/Images";
import client from "/src/assets/blogpageClient.png";
import star from "/src/assets/productsStat.png";
import stardark from "/src/assets/productStardrak.png";
import bnrLogo from "/src/assets/bannerLogo.png";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // All 10 blog posts with verified working image links
  const blogPosts = [
    // --- Vegetables items ---
    {
      id: 1,
      title: "10 Amazing Health Benefits of Consuming Organic Vegetables Daily",
      category: "Vegetables items",
      date: "July 27, 2026",
      comments: "4 Comments",
      desc: "Organic vegetables are free from harmful synthetic pesticides and rich in essential nutrients. Discover how switching to farm-fresh greens can boost your daily immunity.",
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Why Leafy Greens Should Be the Core of Your Family Diet",
      category: "Vegetables items",
      date: "July 29, 2026",
      comments: "2 Comments",
      desc: "Spinach, kale, and other leafy greens provide immense iron and vitamins. Learn easy meal-prep ideas to include more greens in your children's daily food habits.",
      img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=800&auto=format&fit=crop",
    },

    // --- Herbal Medicine ---
    {
      id: 3,
      title: "How Natural Herbal Medicines Improve Your Daily Lifestyle",
      category: "Herbal Medicine",
      date: "August 02, 2026",
      comments: "3 Comments",
      desc: "Herbal remedies have been trusted for centuries to heal common ailments naturally without side effects. Learn which herbs you should incorporate into your morning routine.",
      img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Top 5 Ayurvedic Herbs to Boost Your Natural Immunity",
      category: "Herbal Medicine",
      date: "August 05, 2026",
      comments: "5 Comments",
      desc: "Explore the healing power of Ashwagandha, Tulsi, and Turmeric. These traditional herbs help reduce daily stress and protect your body from seasonal illnesses.",
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    },

    // --- Olive Oil massage ---
    {
      id: 5,
      title: "The Ultimate Guide to Choosing Pure Olive Oil for Massage",
      category: "Olive Oil massage",
      date: "August 10, 2026",
      comments: "6 Comments",
      desc: "Olive oil is packed with antioxidants and healthy fats. Find out how therapeutic body massages with cold-pressed olive oil rejuvenate dry skin and relieve sore muscles.",
      img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title:
        "Skin Care Secrets: Why Extra Virgin Olive Oil is Best for Therapy",
      category: "Olive Oil massage",
      date: "August 12, 2026",
      comments: "1 Comment",
      desc: "Unlock deep hydration and natural skin glow using extra virgin olive oil. Perfect for daily spa massages, baby care, and relaxation therapy after a long workday.",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    },

    // --- Organic Foods ---
    {
      id: 7,
      title: "Transitioning to a 100% Organic Food Diet: What to Expect",
      category: "Organic Foods",
      date: "August 15, 2026",
      comments: "8 Comments",
      desc: "Going organic improves gut health, digestion, and long-term vitality. Read our expert tips on how to start small and transition your grocery shopping seamlessly.",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "How to Spot Real Certified Organic Foods in Supermarkets",
      category: "Organic Foods",
      date: "August 18, 2026",
      comments: "3 Comments",
      desc: "Not all packaged foods labeled 'natural' are truly organic. Learn how to read certification labels and pick genuinely chemical-free food items for your home.",
      img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop",
    },

    // --- Fishes & meats ---
    {
      id: 9,
      title: "Health Benefits of Eating Fresh Ocean Fish vs Farmed Fish",
      category: "Fishes & meats",
      date: "August 20, 2026",
      comments: "7 Comments",
      desc: "Omega-3 fatty acids in fresh fish are crucial for heart and brain health. Discover why wild-caught fresh fish makes a superior choice for your weekly dinner menu.",
      img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 10,
      title: "Selecting Grass-Fed Meat: Quality, Safety, and Nutrition",
      category: "Fishes & meats",
      date: "August 23, 2026",
      comments: "4 Comments",
      desc: "Grass-fed meats contain higher protein, vitamins, and healthy fats compared to grain-fed alternatives. Here is everything you need to know about purchasing safe meat.",
      img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Vegetables items", count: 2 },
    { name: "Herbal Medicine", count: 2 },
    { name: "Olive Oil massage", count: 2 },
    { name: "Organic Foods", count: 2 },
    { name: "Fishes & meats", count: 2 },
  ];

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Cabbage Blog - Organic Store Articles</title>
        <meta name="blog" content="welcome to blog page" />
      </Helmet>
      <section className="bg-gray-50/50 pb-24 overflow-x-hidden">
        {/* Banner Section */}
        <div className="relative bg-[#F6F9F0] pt-10 pb-12 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden select-none border-b border-[#80B500]/15">
          <div className="absolute top-[-20%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#80B500]/15 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none -z-10" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#E2ECD5]/70 rounded-full blur-[90px] sm:blur-[110px] pointer-events-none -z-10" />

          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
              {/* Left Content */}
              <div className="w-full lg:w-[60%] text-center lg:text-left z-10">
                <div className="inline-flex items-center gap-x-2 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full shadow-sm border border-[#80B500]/30 mb-4 sm:mb-5">
                  <img
                    src={bnrLogo}
                    alt="Logo"
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-[#80B500] text-[11px] sm:text-sm font-bold font-Nunito uppercase tracking-wider">
                    Our Organic Journal & Stories
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gray-900 font-Inter font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3 sm:mb-4">
                  Insights for a Healthy Organic Living
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-base font-Nunito max-w-[540px] mb-6 sm:mb-8 mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
                  Explore expert wellness advice, organic food tips, and
                  farm-to-table guides to help you build a sustainable and
                  healthy daily lifestyle.
                </p>

                {/* Breadcrumb Navigation */}
                <div className="inline-flex items-center gap-2 text-gray-600 text-xs sm:text-sm font-Nunito font-medium bg-white/80 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200/80 shadow-sm mx-auto lg:mx-0">
                  <Link
                    to="/"
                    className="hover:text-[#80B500] transition-colors"
                  >
                    Home
                  </Link>
                  <FaAngleRight className="text-xs text-[#80B500]" />
                  <span className="text-gray-900 font-bold">Blog Article</span>
                </div>
              </div>

              {/* Right Feature Card */}
              <div className="w-full lg:w-[38%] z-10">
                <div className="bg-white/90 backdrop-blur-xl p-5 sm:p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-white flex flex-col gap-4 sm:gap-5">
                  <h3 className="text-gray-900 font-Inter font-bold text-base sm:text-lg border-b border-gray-100 pb-3">
                    Why Read Cabbage Blog?
                  </h3>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-lg sm:text-xl shadow-sm">
                      <MdEco />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-xs sm:text-sm font-Inter">
                        Expert Nutritionists
                      </h4>
                      <p className="text-gray-500 text-[11px] sm:text-xs font-Nunito">
                        Verified tips by certified food specialists
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-lg sm:text-xl shadow-sm">
                      <MdLocalShipping />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-xs sm:text-sm font-Inter">
                        Farm-to-Table Guides
                      </h4>
                      <p className="text-gray-500 text-[11px] sm:text-xs font-Nunito">
                        Learn how fresh organics reach your home
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-lg sm:text-xl shadow-sm">
                      <MdVerified />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-xs sm:text-sm font-Inter">
                        Trusted Wellness
                      </h4>
                      <p className="text-gray-500 text-[11px] sm:text-xs font-Nunito">
                        Pure advice for a healthier daily routine
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Container */}
        <Container>
          <div className="mt-16 lg:mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 flex flex-col gap-12">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="overflow-hidden h-72 sm:h-96 w-full bg-gray-100">
                        <Images
                          srcImg={post.img}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Blog Content */}
                      <div className="p-6 sm:p-8">
                        <span className="text-xs bg-[#80B500]/10 text-[#80B500] font-bold px-3 py-1 rounded-full mb-3 inline-block">
                          {post.category}
                        </span>

                        <div className="flex flex-wrap items-center gap-6 mb-4">
                          <p className="flex items-center gap-2 text-[#647589] text-sm sm:text-base font-bold font-Nunito">
                            <FaCalendarAlt className="text-[#80B500]" />{" "}
                            {post.date}
                          </p>
                          <p className="flex items-center gap-2 text-[#647589] text-sm sm:text-base font-bold font-Nunito">
                            <FaCommentDots className="text-[#80B500]" />{" "}
                            {post.comments}
                          </p>
                        </div>

                        <h4 className="text-Primary text-xl sm:text-2xl lg:text-[26px] font-Inter font-bold leading-snug hover:text-[#80B500] duration-200 cursor-pointer">
                          {post.title}
                        </h4>

                        <p className="text-[#5C727D] text-sm sm:text-base font-Nunito leading-relaxed mt-4">
                          {post.desc}
                        </p>

                        <Link
                          to="#"
                          className="text-[#80B500] text-base font-bold font-Nunito inline-flex items-center gap-x-2 mt-6 hover:translate-x-1 duration-200"
                        >
                          Read Full Article <FaCircleChevronRight />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white p-12 text-center rounded-2xl shadow-sm">
                    <p className="text-xl font-bold font-Nunito text-gray-500">
                      No articles found matching your search or category.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-8">
                <div className="py-8 px-6 text-center bg-white rounded-2xl shadow-md border border-gray-100">
                  <Images
                    className="mx-auto rounded-full w-24 h-24 object-cover shadow-sm"
                    srcImg={client}
                  />
                  <h4 className="text-Primary text-xl font-Inter font-bold mt-4">
                    Jehnny Rose
                  </h4>
                  <p className="text-[#5C727D] text-xs font-Nunito mt-1">
                    Organic Food Specialist / Nutritionist
                  </p>

                  {/* Rating Stars */}
                  <div className="flex justify-center items-center gap-1 mt-3">
                    <Images srcImg={star} className="w-3.5 h-3.5" />
                    <Images srcImg={star} className="w-3.5 h-3.5" />
                    <Images srcImg={star} className="w-3.5 h-3.5" />
                    <Images srcImg={star} className="w-3.5 h-3.5" />
                    <Images srcImg={stardark} className="w-3.5 h-3.5" />
                    <span className="text-[#5C727D] text-xs font-Nunito ml-1">
                      (1 Review)
                    </span>
                  </div>

                  <p className="text-[#5C727D] text-sm font-Nunito leading-relaxed mt-4">
                    Passionate about organic living, natural health remedies,
                    and sustainable farm-to-table nutrition.
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mt-6">
                    <Link
                      to="#"
                      className="p-2.5 bg-gray-100 text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200 shadow-sm"
                    >
                      <FaFacebookF size={14} />
                    </Link>
                    <Link
                      to="#"
                      className="p-2.5 bg-gray-100 text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200 shadow-sm"
                    >
                      <FaTwitter size={14} />
                    </Link>
                    <Link
                      to="#"
                      className="p-2.5 bg-gray-100 text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200 shadow-sm"
                    >
                      <FaInstagram size={14} />
                    </Link>
                    <Link
                      to="#"
                      className="p-2.5 bg-gray-100 text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200 shadow-sm"
                    >
                      <FaGooglePlusG size={14} />
                    </Link>
                  </div>
                </div>

                {/* Live Search Widget */}
                <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                  <h4 className="text-Primary text-xl font-Inter font-bold pb-3 border-b border-gray-200">
                    Search Articles
                  </h4>
                  <div className="mt-5 flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#80B500] transition-colors">
                    <input
                      type="text"
                      placeholder="Search by keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="outline-none text-sm text-[#797D95] font-Nunito py-3 px-4 w-full bg-transparent"
                    />
                    <div className="bg-[#80B500] px-5 py-3 text-white flex items-center justify-center">
                      <IoSearchOutline size={18} />
                    </div>
                  </div>
                </div>

                {/* Interactive Categories Widget */}
                <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                  <h4 className="text-Primary text-xl font-Inter font-bold pb-3 border-b border-gray-200">
                    Categories
                  </h4>
                  <div className="flex flex-col gap-3 mt-5">
                    {categories.map((cat, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`font-medium text-sm font-Nunito py-2.5 px-4 rounded-xl duration-200 flex justify-between items-center group cursor-pointer text-left ${
                          selectedCategory === cat.name
                            ? "bg-[#80B500] text-white shadow-md"
                            : "bg-gray-50 text-[#5C727D] hover:text-white hover:bg-[#80B500]"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                            selectedCategory === cat.name
                              ? "bg-white/20 text-white"
                              : "bg-white text-[#80B500] group-hover:bg-white/20 group-hover:text-white"
                          }`}
                        >
                          ({cat.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
