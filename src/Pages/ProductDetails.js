import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { CartContext } from "../Context/cartContext";
import { PropagateLoader } from "react-spinners";

function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  console.log(productId, "ID");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log("Error while fetching the Product:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 min-h-screen flex justify-center ">
        {loading ? (
          <div className="flex justify-center my-2 items-center h-full">
            <PropagateLoader color="#ffffff" />
          </div>
        ) : (
          <div className="container max-w-4xl p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt="Product"
                  width={250}
                  className="w-auto h-80"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-gray-600 mb-2">
                  Category: {product.category}
                </p>
                <p className="text-gray-800 font-semibold mb-2">
                  Price: ₹ {product.price}
                </p>
                <div className="flex items-center text-gray-600">
                  <div className="mr-1">⭐ {product.rating.rate}</div>
                  <div>Total Ratings: {product.rating.count}</div>
                </div>
                <button
                  onClick={addToCart}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg p-2 mt-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;
