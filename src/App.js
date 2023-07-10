import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import CartPage from "./Pages/Cart";
import ProfilePage from "./Pages/Profile";
import ProductDetails from "./Pages/ProductDetails";
import { CartProvider } from "./Context/cartContext";
// import ProductList from "./Pages/ProductList";

const App = () => {
  
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          {/* <Route path="/category/:category" element={<ProductList />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
