import React, {  useState } from "react";
import Navbar from "../Components/Navbar";
import Categories from "../Components/Categories";
import ProductList from "../Pages/ProductList";

function HomePage() {
  
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />
      <Categories onCategorySelect={handleCategorySelect} />
      <ProductList selectedCategory={selectedCategory} />
    </>
  );
}

export default HomePage;
