"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufecturer, setManufecturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufecturer={manufecturer}
          setManufacturer={setManufecturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
