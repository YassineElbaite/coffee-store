// src/pages/Checkout.jsx
import React, { useState } from "react";

function Checkout({ cart, onClearCart }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city || !form.address) {
      alert("Please fill in all required fields.");
      return;
    }
    alert("Thank you! Your order has been recorded.");
    onClearCart();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fae5d3] via-[#ecd9c6] to-[#f8f4ea] py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Form */}
        <div className="lg:col-span-2 bg-white/90 rounded-3xl shadow-xl p-8 border border-[#ecd9c6]">
          <h1 className="text-3xl md:text-4xl font-black text-[#a67c52] mb-6">
            Checkout
          </h1>
          <p className="text-[#6b4f27] mb-8">
            Enter your delivery details to confirm your order. Payment will be
            done on delivery (cash or card).
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#6b4f27] mb-1">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-[#ecd9c6] focus:outline-none focus:ring-2 focus:ring-[#b8926a]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#6b4f27] mb-1">
                  Phone *
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-[#ecd9c6] focus:outline-none focus:ring-2 focus:ring-[#b8926a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#6b4f27] mb-1">
                  City *
                </label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-[#ecd9c6] focus:outline-none focus:ring-2 focus:ring-[#b8926a]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#6b4f27] mb-1">
                  Neighborhood / Area
                </label>
                <input
                  name="area"
                  value={form.area || ""}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-[#ecd9c6] focus:outline-none focus:ring-2 focus:ring-[#b8926a]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#6b4f27] mb-1">
                Full Address *
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 rounded-xl border border-[#ecd9c6] focus:outline-none focus:ring-2 focus:ring-[#b8926a]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#6b4f27] mb-1">
                Notes (optional)
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows="2"
                className="w-full p-3 rounded-xl border border-[#ecd9c6] focus:outline-none focus:ring-2 focus:ring-[#b8926a]"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto mt-4 bg-[#a67c52] text-white font-bold py-3 px-10 rounded-xl hover:bg-[#6b4f27] transition disabled:opacity-60"
              disabled={cart.length === 0}
            >
              Confirm Order
            </button>
          </form>
        </div>

        {/* Right: Order summary */}
        <div className="bg-white/95 rounded-3xl shadow-xl p-7 border border-[#ecd9c6] h-fit">
          <h2 className="text-2xl font-bold text-[#6b4f27] mb-4">
            Order Summary
          </h2>

          {cart.length === 0 ? (
            <p className="text-[#a67c52] text-sm">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-3 mb-4 max-h-72 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover border border-[#ecd9c6]"
                      />
                      <div>
                        <div className="font-semibold text-[#6b4f27]">
                          {item.name}
                        </div>
                        <div className="text-xs text-[#a67c52]">
                          {item.quantity} × {item.price} dh
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-[#b8926a]">
                      {(item.price * item.quantity).toFixed(2)} dh
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#ecd9c6] pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6b4f27]">Subtotal</span>
                  <span className="font-semibold text-[#b8926a]">
                    {subtotal.toFixed(2)} dh
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b4f27]">Delivery</span>
                  <span className="font-semibold text-[#6b4f27]">
                    Free in Casablanca
                  </span>
                </div>
                <div className="flex justify-between text-lg font-extrabold mt-2">
                  <span className="text-[#6b4f27]">Total</span>
                  <span className="text-[#b8926a]">
                    {subtotal.toFixed(2)} dh
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#a67c52]">
                You will receive a confirmation call or WhatsApp message after
                placing the order.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
