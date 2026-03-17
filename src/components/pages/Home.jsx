import AboutUs from "../layouts/AboutUs"
import Banner from "../layouts/Banner"
import ChooseUs from "../layouts/ChooseUs"
import Companylogo from "../layouts/Companylogo"
import LastBlog from "../layouts/LastBlog"
import Ourproducts from "../layouts/Ourproducts"
import ProductsFacilities from "../layouts/ProductsFacilities"
import Testmonial from "../layouts/Testmonial"
import TodaysHotDeals from "../layouts/TodaysHotDeals"
import TredingProductsTwo from "../layouts/TredingProductsTwo"
import TrendingProducts from "../layouts/TrendingProducts"
import Video from "../layouts/Video"



const Home = () => {
  return (
    <>
    <Banner/>
    <AboutUs/>
    <ChooseUs/>
    <Ourproducts/>
    <TodaysHotDeals/>
    <TrendingProducts/>
    <Video/>
    <ProductsFacilities/>
    <TredingProductsTwo/>
    <Testmonial/>
    <LastBlog/>
    <Companylogo/>
    </>
  )
}

export default Home