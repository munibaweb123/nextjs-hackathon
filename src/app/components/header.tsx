"use client";
import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-[132px] max-w-[1440px] mx-auto">
      {/* Main header container */}
      <div className="flex justify-between items-center border-b-2 px-4 py-2 md:px-10">
        
       
          <FaSearch size={20} />
          <h1 className="text-2xl font-clash">Avion</h1>
    

        {/* Right Side on desktop: Shopping Cart and Profile icons */}
        <div className="hidden md:flex items-center gap-x-4">
        <Link href={"/cart"}>  <FaShoppingCart size={20} /></Link>
          <MdPerson size={20} />
        </div>

        {/* Mobile Menu Button (visible only on mobile) */}
        <button
          className="md:hidden z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-end items-center max-w-[675px] mx-auto p-4 md:p-10">
        <nav>
          <ul className="flex gap-x-4">
            <li>
              <Link href={"/"}>Plant pots</Link>
            </li>
            <li>
              <Link href={"#ceramics"}>Ceramics</Link>
            </li>
            <li>
              <Link href={"/"}>Tables</Link>
            </li>
            <li>
              <Link href={"/"}>Chairs</Link>
            </li>
            <li>
              <Link href={"/"}>Crockery</Link>
            </li>
            <li>
              <Link href={"/"}>Tableware</Link>
            </li>
            <li>
              <Link href={"/"}>Cutlery</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation (visible only on mobile) */}
      <nav
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-10 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col gap-y-4 p-8 mt-5">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/cart"}>Cart</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/product"}>Product</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
