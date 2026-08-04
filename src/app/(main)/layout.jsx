import Navbar from "@/components/Shared/Navbar";
import { Providers } from "../providers";

export default function MainLayout({ children }) {
  return (
    <Providers>
      <Navbar />
      {children}
    </Providers>
  );
}