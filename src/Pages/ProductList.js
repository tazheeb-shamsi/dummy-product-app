import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      let apiUrl = "https://fakestoreapi.com/products";
      if (selectedCategory) {
        apiUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
      }
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  const trimTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + " ...";
    }
    return title;
  };

  return (
    <div className="p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <PropagateLoader color="#ffffff" />
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="bg-white rounded-lg p-4"
            >
              <img
                src={product.image}
                alt=""
                className="w-48 h-48 object-contain mx-auto mb-4"
              />
              <div className="text-xl font-bold mb-2">
                {trimTitle(product.title, 27)}
              </div>
              <div className="text-gray-600 mb-2">{product.category}</div>
              <div className="text-gray-800 font-semibold mb-2">
                Price : ₹ {product.price}
              </div>
              <div className="flex items-center text-gray-600">
                <div className="mr-1">⭐ {product.rating.rate}</div>
                <div>Total Ratings: {product.rating.count}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
