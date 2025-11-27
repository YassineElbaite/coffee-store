import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// import all category data
import machines from "../data/machines";
import chairs from "../data/chairs";
import tables from "../data/tables";
import tv from "../data/tv";
import mugs from "../data/mugs";
import juicers from "../data/juicers";
import accessories from "../data/accessories";

// merge into one array
const allProducts = [
  ...machines,
  ...chairs,
  ...tables,
  ...tv,
  ...mugs,
  ...juicers,
  ...accessories,
];

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!product)
    return (
      <div className="p-16 text-center text-xl text-[#c0392b]">
        Product not found
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] bg-gradient-to-br from-[#fae5d3] via-[#ecd9c6] to-[#f8f4ea] px-6 py-14 gap-12">
      <img
        src={product.image}
        alt={product.name}
        className="w-[420px] h-[420px] object-cover rounded-2xl shadow-2xl border border-[#ecd9c6]"
      />
      <div className="max-w-lg flex flex-col gap-6">
        <h2 className="text-4xl font-extrabold text-[#6b4f27]">
          {product.name}
        </h2>
        <div className="text-lg text-[#a67c52]">{product.description}</div>
        <div className="text-3xl font-extrabold text-[#b8926a]">
          ${product.price}
        </div>
        <div className="flex gap-4 mt-8">
          <button
            className="bg-[#a67c52] text-white py-3 px-7 rounded-xl text-xl font-bold hover:bg-[#6b4f27] transition"
            onClick={() => {
              onAddToCart(product);
              navigate("/products");
            }}
          >
            Add to Cart
          </button>
          <button
            className="bg-[#ecd9c6] text-[#6b4f27] py-3 px-7 rounded-xl text-xl font-bold hover:bg-[#f4e1c2] transition border border-[#cba47f]"
            onClick={() => navigate("/products")}
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
