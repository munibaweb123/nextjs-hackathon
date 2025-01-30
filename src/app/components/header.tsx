"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import SearchBar from "./search";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleCartClick } = useShoppingCart();

  return (
    <div className="h-auto md:h-[132px] md:max-w-[1440px] w-full mx-auto p-4">
      {/* Main Header Row */}
      <div className="flex justify-between items-center border-b-2 pb-3 md:pb-4">
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-clash">Muniba e-shop</h1>

        {/* Right Side: Cart & Authentication */}
        <div className="flex items-center gap-x-4">
          {/* Cart Button */}
          <Button variant={"outline"} onClick={() => handleCartClick()}>
            <ShoppingBag />
          </Button>

          {/* Authentication */}
          <SignedOut>
            <SignInButton>
              <Button variant="outline">
                <MdPerson size={20} /> Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
            <SignOutButton>
              <Button variant="outline">
                <MdPerson size={20} /> Sign Out
              </Button>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>

      {/* Search Bar (Always Visible) */}
      <div className="mt-3 md:mt-0">
        <SearchBar />
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`absolute top-0 left-0 w-full bg-white z-10 p-6 shadow-lg md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
          <FaTimes size={24} />
        </button>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col gap-y-6 text-lg mt-10">
          <li><Link href={"/"} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href={"/cart"} onClick={() => setIsMenuOpen(false)}>Cart</Link></li>
          <li><Link href={"/about"} onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link href={"/product"} onClick={() => setIsMenuOpen(false)}>Product</Link></li>
          <li><Link href={"/productlisting"} onClick={() => setIsMenuOpen(false)}>Product Listing</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
