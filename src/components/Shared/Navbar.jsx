"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import userAvatar from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import { LogOut, User as UserIcon, LayoutGrid, Menu, X, ShoppingBag } from "lucide-react";
import toast from "react-hot-toast";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { totalItems } = useCart();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(session,"session");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Log Out Handler
  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully!");

      setIsProfileOpen(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed! Please try again.");
    }
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "All Tiles", href: "/all-tiles" },
    { name: "My Profile", href: "/my-profile" },
  ];

  if (!isMounted) return null;

  return (
    <nav className="sticky container mx-auto top-0 z-50 bg-green-100 backdrop-blur-md border rounded-xl border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left side Mobile Menu & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src={logo}
                alt="Tile & Crown Logo"
                width={100}
                height={100}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="font-extrabold text-sm md:text-xl lg:text-2xl tracking-tight text-[#096428]">
              <span className="text-[#482d08]">Clay</span> & <span className="text-[#b3a505]">Crown</span>
            </div>
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden sm:flex items-center gap-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#0a8f1c] text-white shadow-sm"
                    : "border border-slate-300/80 bg-white text-[#0a8f1c] hover:bg-slate-50 hover:border-[#0a8f1c]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right side - Cart & Profile/Login */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            aria-label="View Shopping Cart"
            className="relative inline-flex items-center justify-center w-10 h-10 text-slate-700 hover:text-[#0a8f1c] transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center z-50">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Conditional Rendering Login */}
          {user ? (
            <div className="flex items-center gap-3">
              <h2 className="hidden md:block text-sm">Hello, {user.name}</h2>
              <div className="relative">
                
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-10 h-10 rounded-xl border border-slate-200 overflow-hidden focus:outline-none flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User"}
                      width={60}
                      height={60}
                      className="object-cover rounded-full"
                      unoptimized
                    />
                  ) : (
                    <UserIcon className="w-5 h-5 text-slate-600" />
                  )}
                </button>
                
              </div>

              <button
                onClick={handleLogout}
                className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* Default User Icon Link */}
              <Link href="/login">
                <div className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                  <UserIcon className="w-5 h-5" />

                </div>
              </Link>

              {/* Login Button */}
              <Link href="/login">
                <button className="bg-[#0a8f1c] hover:bg-[#148523] text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-sm transition-colors">
                  Login
                </button>
              </Link>
            </div>
          )}

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 rounded-b-xl">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${
                pathname === item.href
                  ? "bg-[#0a8f1c] text-white font-bold"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}