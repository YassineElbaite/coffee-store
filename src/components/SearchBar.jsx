import React from "react";

function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="my-3 w-full sm:w-80 flex items-center bg-[#fae5d3] rounded-xl px-4 py-2 shadow-sm border border-[#ecd9c6]">
      <svg
        className="w-5 h-5 text-[#b8926a] mr-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" stroke="currentColor" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" />
      </svg>
      <input
        type="text"
        placeholder="Search products…"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full bg-transparent focus:bg-white/50 placeholder-[#b8926a] outline-none border-none text-[#6b4f27] text-lg"
      />
    </div>
  );
}

export default SearchBar;
