// src/components/FilterBar.jsx
import React from "react";

const categories = [
  "all",
  "machines",
  "chairs",
  "tables",
  "tv",
  "mugs",
  "juicers",
  "accessories",
];

function FilterBar({ selectedCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3 my-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)} // sends "tables", "machines", etc.
          className={`py-2 px-5 rounded-full font-semibold transition
            ${
              selectedCategory === cat
                ? "bg-[#cba47f] text-white shadow-md border border-[#b8926a]"
                : "bg-[#fae5d3] text-[#a67c52] hover:bg-[#ecd9c6] border border-[#ecd9c6]"
            }
          `}
        >
          {cat[0].toUpperCase() + cat.slice(1)}{" "}
          {/* label: All, Machines, Tables... */}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
