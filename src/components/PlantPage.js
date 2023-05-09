import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plants, setPlants] = useState([])
const [search, setSearch] = useState('')
//when the app starts, I can see all plants
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response=>response.json())
    .then((allPlants) => setPlants(allPlants))
    },[])

    function addNewPlant(newPlant) {
      setPlants({newPlant, ...plants});
    }

    function onSearchChange(newSearch){
      setSearch(prevSearch => newSearch)
    }

    //4. I can search for plants by their name and see a filtered list of plants.
    let filteredPlants= plants
    if (search !== "" ) {
      filteredPlants = [...plants].filter(
        //what part of plant matches what part of search? how can we compare plant.name to search?
        plant => 
        plant.name.toLowerCase().includes(search.toLowerCase())
      )

    }
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search onSearchChange={onSearchChange}search= {search}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
