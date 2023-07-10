import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext";

function Navbar() {
  const { cartCount } = useContext(CartContext);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">
          THS
        </Link>
        <div className="flex items-center justify-center flex-grow">
          <input
            type="text"
            className="rounded-lg p-2 w-2/3 text-black"
            placeholder="Search Products..."
          />
        </div>
        <div className="flex items-center">
          <div className="relative">
            <img
              src="/cart-96.png"
              alt="cart"
              className="ml-4 w-12 h-12 rounded-full"
            />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          <img
            src="/avatar-96.png"
            alt="Avatar"
            className="ml-4 w-12 h-12 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
