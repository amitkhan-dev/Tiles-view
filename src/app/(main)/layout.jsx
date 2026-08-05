import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}