import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import CartPanel from "./components/CartPanel";
import ProductDetails from "./components/ProductDetails";
import Coffees from "./pages/Coffees"; // NEW line for Coffees page
import Checkout from "./pages/Checkout"; // create this

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Add product to cart
  function handleAddToCart(product) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  // Update product quantity
  function handleUpdateQuantity(productId, amount) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Remove product from cart
  function handleRemoveFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  return (
    <Router>
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductList onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/coffees"
          element={<Coffees onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} onClearCart={() => setCart([])} />}
        />
      </Routes>
      <CartPanel
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </Router>
  );
}

export default App;
