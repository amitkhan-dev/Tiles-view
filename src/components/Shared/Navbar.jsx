"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import { LogOut, User as UserIcon, LayoutGrid, Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cart, totalItems, isMounted } = useCart();
  console.log("Navbar Cart:", cart);
  console.log("Navbar Total:", totalItems);
  console.log("Mounted:", isMounted);

  const session = null;

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "All Tiles", href: "/all-tiles" },
    { name: "My Profile", href: "/my-profile" },
  ];

  return (
    <nav className="sticky container mx-auto top-0 z-50 bg-white/90 backdrop-blur-md border rounded-xl border-slate-200">
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
            <div className="font-extrabold text-2xl tracking-tight text-[#096428]">
              
              <span className="text-[#482d08]">Clay</span>  & <span className="text-[#b3a505]">Crown</span>
            </div>
          </Link>
        </div>

        {/* Center - Pill Styled Navigation Links */}
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

        {/* Right side - Profile, Cart & Login */}
        <div className="flex items-center gap-4">
          {/* Shopping Cart Icon */}
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

          {session ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="primary"
                  name={session.user?.name || "User"}
                  size="md"
                  src={
                    session.user?.image ||
                    `https://api.dicebear.com/7.x/initials/svg?seed=${session.user?.name || "User"}`
                  }
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile_header" className="h-14 gap-2">
                  <p className="font-semibold">Logged in as</p>
                  <p className="font-semibold text-[#0a8f1c]">{session.user?.email}</p>
                </DropdownItem>
                <DropdownItem key="my_profile" startContent={<UserIcon className="w-4 h-4" />}>
                  <Link href="/my-profile" className="w-full block">My Profile</Link>
                </DropdownItem>
                <DropdownItem key="all_tiles" startContent={<LayoutGrid className="w-4 h-4" />}>
                  <Link href="/all-tiles" className="w-full block">All Tiles</Link>
                </DropdownItem>
                <DropdownItem key="logout" color="danger" startContent={<LogOut className="w-4 h-4 text-xl" />}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/my-profile">
                <Button
                  isIconOnly
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="md"
                  className="text-slate-600 hover:text-[#006680]"
                >
                  <UserIcon className="w-5 h-5" />
                </Button>
            </Link>

              {/* Login Button*/}
              <Link href="/login">
                <Button
                  radius="lg"
                  size="md"
                  className="bg-[#0a8f1c] hover:bg-[#148523] text-white font-semibold text-sm px-6 rounded-xl shadow-sm"
                >
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
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