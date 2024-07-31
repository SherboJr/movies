import React, { useState, useEffect } from "react";
import "../components/css/SearchBar.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
        className="search-bar__input"
      />
    </div>
  );
};

export default SearchBar;
