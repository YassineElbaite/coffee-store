import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#ecd9c6] overflow-hidden flex flex-col transition duration-200 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover cursor-pointer"
        />
      </Link>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-[#6b4f27] mb-1 cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-[#a67c52] mb-2">{product.description}</p>
        <span className="text-2xl font-extrabold text-[#b8926a] mb-4">
          {product.price}dh
        </span>
        <button
          className="bg-[#a67c52] text-white font-bold py-2 px-5 rounded-xl mt-auto hover:bg-[#6b4f27] transition"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
