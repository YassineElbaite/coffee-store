// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import machines from "../data/machines";
import tables from "../data/tables";

function Home() {
  const navigate = useNavigate();

  // pick some featured products (first 2 machines + first table)
  const featured = [machines[0], machines[1], tables[0]].filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fae5d3] via-[#ecd9c6] to-[#f8f4ea] flex flex-col">
      {/* Hero section */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-16 py-16">
        {/* Left: Text */}
        <div className="max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-black text-[#6b4f27] mb-4 leading-tight drop-shadow-sm">
            Coffee Store
          </h1>
          <h2 className="text-2xl text-[#b8926a] mb-4 font-semibold">
            Equipment & Coffee Experience
          </h2>
          <p className="text-[#6b4f27] text-base lg:text-lg mb-6">
            A modern web store template for cafés and coffee lovers. Explore
            espresso machines, chairs, tables, mugs and premium coffees all in
            one elegant interface.
          </p>
          <p className="text-[#a67c52] text-sm lg:text-base mb-8">
            Use this project to manage your products, present real machines and
            beans, and simulate a complete ordering flow from cart to checkout.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/products")}
              className="bg-[#a67c52] text-white font-bold py-3 px-8 rounded-xl text-lg hover:bg-[#6b4f27] transition"
            >
              View All Products
            </button>
            <button
              onClick={() => navigate("/coffees")}
              className="border-2 border-[#a67c52] text-[#a67c52] font-bold py-3 px-8 rounded-xl text-lg hover:bg-[#a67c52] hover:text-white transition"
            >
              Discover Coffees
            </button>
          </div>
        </div>

        {/* Right: Hero image */}
        <div className="relative">
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-[#cba47f] bg-opacity-40 flex items-center justify-center shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=700&q=80"
              alt="Coffee machine and cup"
              className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-[10px] border-[#f3e4d9]"
            />
          </div>
        </div>
      </main>

      {/* Featured products strip */}
      <section className="bg-white/70 border-t border-[#ecd9c6] py-8 px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-[#6b4f27]">
              Featured equipment
            </h3>
            <p className="text-sm text-[#a67c52]">
              A quick look at some machines and tables available in the store.
            </p>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="self-start lg:self-auto text-sm font-semibold text-[#a67c52] hover:underline"
          >
            See full catalog →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md border border-[#ecd9c6] p-4 flex items-center gap-4 hover:shadow-xl transition cursor-pointer"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl border border-[#f3e4d9]"
              />
              <div>
                <h4 className="text-sm font-bold text-[#6b4f27] line-clamp-2">
                  {item.name}
                </h4>
                <p className="text-xs text-[#a67c52] mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="text-sm font-extrabold text-[#b8926a] mt-2">
                  {item.price} dh
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="bg-transparent py-10 px-6 lg:px-16">
        <h3 className="text-2xl font-bold text-[#6b4f27] mb-4">
          What café owners say
        </h3>
        <p className="text-sm text-[#a67c52] mb-6 max-w-2xl">
          This project is built to help small cafés present their equipment and
          coffees online with a clean, modern interface.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 rounded-2xl p-5 shadow-md border border-[#ecd9c6]">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-[#6b4f27]">Youssef Café</span>
              <span className="text-xs text-[#b8926a]">Owner</span>
            </div>
            <div className="flex text-[#b8926a] text-sm mb-2">★★★★☆</div>
            <p className="text-sm text-[#a67c52]">
              “Perfect structure to show all my machines and chairs. The filters
              and cart feel like a real shop.”
            </p>
          </div>

          <div className="bg-white/80 rounded-2xl p-5 shadow-md border border-[#ecd9c6]">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-[#6b4f27]">Latte Corner</span>
              <span className="text-xs text-[#b8926a]">Manager</span>
            </div>
            <div className="flex text-[#b8926a] text-sm mb-2">★★★★★</div>
            <p className="text-sm text-[#a67c52]">
              “Love the warm colors and the checkout flow. Easy to adapt for a
              real client project.”
            </p>
          </div>

          <div className="bg-white/80 rounded-2xl p-5 shadow-md border border-[#ecd9c6]">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-[#6b4f27]">Roast Lab</span>
              <span className="text-xs text-[#b8926a]">Barista</span>
            </div>
            <div className="flex text-[#b8926a] text-sm mb-2">★★★★☆</div>
            <p className="text-sm text-[#a67c52]">
              “The coffees page with Arabica, Robusta and Mélange is exactly
              what I need to present my beans.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
