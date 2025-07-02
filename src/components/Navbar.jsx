"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#2d2d2d] text-white relative z-50">
      {/* Navbar container */}
      <nav className="bg-white text-black px-6 py-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto relative">
          {/* Logo */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
            CHGR+
          </h1>

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-6 text-sm font-semibold uppercase">
            <li>
              <a href="/" className="hover:text-purple-900">
                Home
              </a>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-900">
                About Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-purple-900">
                Partner With Us
              </a>
            </li>
            <li>
              <a href="/purchasebulkchargers" className="hover:text-purple-900">
                Purchase Bulk Chargers
              </a>
            </li>
            <li>
              <a href="/contactus" className="hover:text-purple-900">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden absolute top-[100%] left-0 w-full bg-white transition-all duration-300 shadow-md ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 px-6 py-4 text-sm font-semibold uppercase text-black">
            <li>
              <a href="/" className="hover:text-purple-950">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-purple-950">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-950">
                Partner With Us
              </a>
            </li>
            <li>
              <a href="/purchasebulkchargers" className="hover:text-purple-950">
                Purchase Bulk Chargers
              </a>
            </li>
            <li>
              <a href="/contactus" className="hover:text-purple-950">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
