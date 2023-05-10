import React from "react";

function Search({search, setSearch}) {

  function handleChange(e){
    setSearch(e.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;

//DELIVERABLE #4
//I can search fr plants by their nam and see a filtered list of plants
//set value to searach state
//UPDATE to be e.target.value
//we need to make a state for search in PlantPage
//psas props of searach and setSearch and add value of search to input