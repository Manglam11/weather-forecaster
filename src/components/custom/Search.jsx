import React from "react";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <div className="flex justify-center items-center gap-1">
      <CiSearch />
      <div className="search-input">
        <input type="text" name="search-city" placeholder="Search city..." />
      </div>
    </div>
  );
};

export default Search;
