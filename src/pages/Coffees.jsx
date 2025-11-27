import React, { useState } from "react";
import arabicaCoffees from "../data/arabicaCoffees";
import robustaCoffees from "../data/robustaCoffees";
import blendCoffees from "../data/blendCoffees";

const coffees = [...arabicaCoffees, ...robustaCoffees, ...blendCoffees];

const coffeeTypes = ["All", "Arabica", "Robusta", "Mélange"];

function Coffees({ onAddToCart }) {
  const [filter, setFilter] = useState("All");

  const filteredCoffees =
    filter === "All" ? coffees : coffees.filter((c) => c.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fae5d3] via-[#ecd9c6] to-[#f8f4ea] py-14 px-8">
      {/* Coffee Story / Our Roasts */}
      <section className="max-w-4xl mb-10">
        <h1 className="text-4xl font-black text-[#6b4f27] mb-3">
          Our Roasts & Coffee Story
        </h1>
        <p className="text-[#6b4f27] mb-3">
          From smooth Arabica beans to intense Robusta and house blends, this
          section lets you explore coffees exactly like a real specialty shop.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white/80 rounded-2xl p-4 shadow-sm border border-[#ecd9c6]">
            <h3 className="text-lg font-bold text-[#6b4f27] mb-1">
              Arabica Pure
            </h3>
            <p className="text-sm text-[#a67c52]">
              Smooth, aromatic and slightly sweet. Perfect for espresso and milk
              drinks with a refined taste.
            </p>
          </div>
          <div className="bg-white/80 rounded-2xl p-4 shadow-sm border border-[#ecd9c6]">
            <h3 className="text-lg font-bold text-[#6b4f27] mb-1">
              Robusta Pure
            </h3>
            <p className="text-sm text-[#a67c52]">
              Strong body, higher caffeine and intense crema. Ideal for lovers
              of powerful, punchy espresso.
            </p>
          </div>
          <div className="bg-white/80 rounded-2xl p-4 shadow-sm border border-[#ecd9c6]">
            <h3 className="text-lg font-bold text-[#6b4f27] mb-1">
              House Mélange
            </h3>
            <p className="text-sm text-[#a67c52]">
              Carefully balanced blends of Arabica and Robusta to control
              flavor, intensity and crema for every recipe.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {coffeeTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`py-2 px-6 rounded-full font-semibold transition text-lg
              ${
                filter === type
                  ? "bg-[#cba47f] text-white shadow-md border border-[#b8926a]"
                  : "bg-[#fae5d3] text-[#a67c52] hover:bg-[#ecd9c6] border border-[#ecd9c6]"
              }
            `}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Coffee cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCoffees.length ? (
          filteredCoffees.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-white rounded-2xl shadow-xl border border-[#ecd9c6] hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 p-6 flex flex-col items-center"
            >
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-8 border-[#fae5d3]"
              />
              <h2 className="text-2xl font-bold text-[#6b4f27] mb-2">
                {coffee.name}
              </h2>
              <span className="font-semibold text-[#b8926a] mb-2">
                {coffee.type}
              </span>
              <p className="text-[#a67c52] mb-3 text-center">
                {coffee.description}
              </p>
              <div className="text-2xl font-extrabold text-[#b8926a] mb-3">
                {coffee.price.toFixed(2)} dh
              </div>
              <button
                className="mt-auto bg-[#a67c52] text-white font-bold py-2 px-7 rounded-xl hover:bg-[#6b4f27] transition"
                onClick={() => onAddToCart(coffee)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-[#cba47f] mt-16 text-2xl font-bold opacity-70">
            No coffee found...
          </div>
        )}
      </div>
    </div>
  );
}

export default Coffees;
