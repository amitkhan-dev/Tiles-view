import AboutTiles from "@/components/Home/AboutTiles";
import FeaturedCatagory from "@/components/Home/FeaturedCatagory";
import HeroBanner from "@/components/Home/HeroBanner";
import HeaderMarquee from "@/components/Home/Marque";
import SearchBar from "@/components/Home/SearchBar";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    
    <div>
      
      <HeroBanner/>
      <HeaderMarquee/>
      <SearchBar/>
      <FeaturedCatagory/>
      <Testimonial/>
      <AboutTiles/>
      
      
    </div>
  );
}
