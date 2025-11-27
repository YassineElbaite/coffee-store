import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount, onCartClick }) {
  return (
    <header
      className="flex justify-between items-center px-6 py-4"
      style={{ backgroundColor: "#cba47f" }}
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-white">
        Store Equipment Products
      </Link>
      {/* Navigation + Cart (on RIGHT) */}
      <div className="flex items-center gap-6">
        <nav className="flex gap-6">
          <Link to="/" className="text-white font-semibold hover:underline">
            Home
          </Link>
          <Link
            to="/products"
            className="text-white font-semibold hover:underline"
          >
            Products
          </Link>
          <Link
            to="/coffees"
            className="text-white font-semibold hover:underline"
          >
            Coffees
          </Link>
        </nav>
        <div className="relative">
          <button
            onClick={onCartClick}
            className="p-2 rounded-full bg-white hover:bg-[#dfcba6] transition"
            aria-label="Shopping cart"
          >
            {/* Shopping Cart SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#cba47f]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9M17 13a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
            {/* Notification badge */}
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
