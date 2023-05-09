import React from "react";

function Search({search, onSearchChange}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearchChange(e.target.value)} // this will make the searchbar work
      />
    </div>
  );
}

export default Search;


//4. I can search for plants by their name and see a filtered list of plants.