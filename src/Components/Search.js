import React, { useState } from "react";

const SearchList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Make API call to get search results
    fetch(`https://fakestoreapi.com/products?title_like=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  };

  return (
    <div>
      <h1>Search List</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <ul>
        {searchResults.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
