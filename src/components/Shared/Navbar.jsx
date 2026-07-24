"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,} from "@heroui/react";
import { Sparkles, LogOut, User as UserIcon, LayoutGrid, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const session = null;

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "All Tiles", href: "/all-tiles" },
    { name: "My Profile", href: "/my-profile" },
  ];

  return (
    <nav className="sticky container mx-auto top-0 z-50 bg-background/80 backdrop-blur-md border-b border-default-100">
      <div className=" px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left side Mobile Menu, Button & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-xl hover:bg-default-100 text-default-600 transition-colors"
            aria-label="Toggle Menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-22 h-22 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src={logo}
                alt="Tile & Crown Logo"
                width={100}
                height={100}
                className="object-contain w-full h-full"
                priority/>
            </div>
              <span className="font-extrabold text-2xl tracking-tight bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Tile & Crown
              </span>
            </Link>
          </div>

        {/* { Center- Home, All Tiles, My Profile } */}
        <div className="hidden sm:flex items-center gap-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xl font-medium transition-colors ${isActive ? "text-primary font-semibold" : "text-default-600 hover:text-primary"
                }`}>{item.name}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
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
                  src={session.user?.image || "https://i.pravatar.cc/150"}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile_header" className="h-14 gap-2">
                  <p className="font-semibold">Logged in as</p>
                  <p className="font-semibold text-primary">{session.user?.email}</p>
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
            <div className="flex items-center gap-2">
              <Button
                as={Link}
                href="/my-profile"
                isIconOnly
                variant="flat"
                color="default"
                radius="full"
                size="md"
                aria-label="My Profile"
                className="text-default-600 hover:text-primary"
              >
                <UserIcon className="w-8 h-8" />
              </Button>

              {/* Login Button */}
              <Button
                as={Link}
                href="/login"
                color="primary"
                radius="full"
                variant="shadow"
                size="md"
                className="text-xl font-semibold px-6">
                Login
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="sm:hidden border-t border-default-100 bg-background/95 backdrop-blur-md px-4 py-4 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium ${
                pathname === item.href ? "text-primary font-bold" : "text-default-700"
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