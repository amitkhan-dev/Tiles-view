import AboutTiles from "@/components/Home/AboutTiles";
import FeaturedCatagory from "@/components/Home/FeaturedCatagory";
import HeroBanner from "@/components/Home/HeroBanner";
import HeaderMarquee from "@/components/Home/Marque";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    
    <div>
      
      <HeroBanner/>
      <HeaderMarquee/>
      <FeaturedCatagory/>
      <Testimonial/>
      <AboutTiles/>
      
      
    </div>
  );
}
