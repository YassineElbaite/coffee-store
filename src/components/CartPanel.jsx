import React from "react";
import { useNavigate } from "react-router-dom";

function CartPanel({ open, onClose, cart, onUpdateQuantity, onRemove }) {
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[#f8f4ea] shadow-2xl transition-transform duration-300 z-50
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b border-[#ecd9c6] bg-[#fae5d3]">
        <h3 className="font-bold text-lg text-[#6b4f27]">Shopping Cart</h3>
        <button
          onClick={onClose}
          className="text-[#6b4f27] hover:text-[#a67c52] text-2xl leading-none"
        >
          &times;
        </button>
      </div>

      {/* Summary */}
      <div className="px-4 pt-3 pb-2 flex justify-between items-center text-sm">
        <span className="text-[#6b4f27]">Items: {totalItems}</span>
        <span className="font-extrabold text-[#b8926a]">
          Subtotal: {subtotal.toFixed(2)} dh
        </span>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-[#a67c52] mt-8 text-center">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between mb-4 bg-white rounded-xl p-3 shadow-sm border border-[#ecd9c6]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <div className="flex-1 ml-3">
                  <div className="font-semibold text-[#6b4f27] text-sm">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#a67c52]">
                    {item.price} dh each
                  </div>
                  <div className="text-xs text-[#b8926a] font-bold mt-1">
                    Line total: {(item.price * item.quantity).toFixed(2)} dh
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  {/* Quantity controls */}
                  <div className="flex items-center">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      disabled={item.quantity === 1}
                      className={`px-2 py-1 rounded-l text-sm border border-[#ecd9c6]
                        ${
                          item.quantity === 1
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-[#ecd9c6] text-[#6b4f27] hover:bg-[#f4e1c2]"
                        }`}
                    >
                      −
                    </button>
                    <span className="px-3 py-1 bg-white border-t border-b border-[#ecd9c6] text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="px-2 py-1 rounded-r text-sm bg-[#ecd9c6] text-[#6b4f27] hover:bg-[#f4e1c2] border border-[#ecd9c6]"
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="text-red-500 text-xs hover:underline"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="p-4 border-t border-[#ecd9c6] bg-[#fae5d3]">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-[#6b4f27]">Total</span>
          <span className="text-xl font-extrabold text-[#b8926a]">
            {subtotal.toFixed(2)} dh
          </span>
        </div>
        <button
          onClick={() => {
            onClose();
            navigate("/checkout");
          }}
          className="w-full bg-[#a67c52] text-white font-bold py-2 rounded-xl hover:bg-[#6b4f27] transition"
          disabled={cart.length === 0}
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPanel;
