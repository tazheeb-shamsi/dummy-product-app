import React, { useEffect, useState } from "react";

const Categories = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="m-4 space-x-2 flex justify-center align-center">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-center"
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
