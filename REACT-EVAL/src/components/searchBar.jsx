import React, { useState } from "react";

const SearchBar = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="m-auto bg-background rounded-2xl w-full max-w-lg transition-all duration-300 flex items-center">
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="w-full p-4 rounded-2xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
      />
    </div>
  );
};

export default SearchBar;
