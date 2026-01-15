import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

function SearchBar({ placeholder = "Search students, clubs, events..." }) {
  const { search, setSearch } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        className="searchbar-input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
      />
      <button className="searchbar-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
