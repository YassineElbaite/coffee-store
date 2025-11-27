import React, { useState } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";

// import category data instead of products.js
import machines from "../data/machines";
import chairs from "../data/chairs";
import tables from "../data/tables";
import tv from "../data/tv";
import mugs from "../data/mugs";
import juicers from "../data/juicers";
import accessories from "../data/accessories";

// merge all into a single array
const allProducts = [
  ...machines,
  ...chairs,
  ...tables,
  ...tv,
  ...mugs,
  ...juicers,
  ...accessories,
];

// Intro text for each category
const categoryIntros = {
  all: "Browse all our equipment: espresso machines, chairs, tables, TVs, mugs, juicers and accessories for a complete coffee shop.",
  machines:
    "Discover our selection of espresso machines, from compact home models to professional machines for serious baristas.",
  chairs:
    "Comfortable and stylish chairs designed to create a warm, welcoming space for your customers.",
  tables:
    "Coffee tables and bistro tables that combine practicality and design for modern cafés.",
  tv: "Screens and TVs to display menus, matches or ambience videos in your coffee shop.",
  mugs: "Mugs, cups and tumblers to serve every coffee drink, from espresso shots to lattes on the go.",
  juicers:
    "Juicers and blenders to offer fresh juices and smoothies alongside your coffee menu.",
  accessories:
    "Grinders, barista tools and accessories that complete your professional coffee corner.",
};

function ProductList({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fae5d3] via-[#ecd9c6] to-[#f8f4ea] py-12 px-8">
      {/* Section Title */}
      <h1 className="text-5xl font-black text-[#a67c52] mb-4 drop-shadow-md tracking-tight">
        Discover Our Coffee Essentials
      </h1>
      {/* Category intro */}
      <p className="mb-8 text-[#6b4f27] max-w-3xl">
        {categoryIntros[selectedCategory]}
      </p>

      {/* Filters + Search */}
      <div className="flex flex-col md:flex-row gap-7 justify-between items-center mb-12">
        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          buttonActiveClass="bg-[#cba47f] text-white"
          buttonClass="bg-white text-[#a67c52] font-semibold px-5 py-2 rounded-full border border-[#ecd9c6] transition hover:bg-[#f4e1c2]"
        />
        <div className="w-full max-w-md">
          <SearchBar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
            inputClassName="w-full p-3 bg-white/70 rounded-xl border-none shadow focus:ring-2 focus:ring-[#b8926a] text-lg transition"
          />
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <ProductCard
                product={product}
                onAddToCart={() => onAddToCart(product)}
                className="bg-white rounded-3xl shadow-xl border border-[#ecd9c6] overflow-hidden flex flex-col transition transform hover:-translate-y-2 hover:scale-104 group-hover:shadow-2xl duration-200"
                buttonClassName="bg-[#a67c52] text-white font-bold w-full py-2 px-6 rounded-xl mt-8 hover:bg-[#6b4f27] transition"
                priceClassName="text-2xl font-extrabold text-[#b8926a] mb-1"
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-[#cba47f] mt-12 text-2xl font-semibold opacity-70">
            Sorry, no products found...
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
