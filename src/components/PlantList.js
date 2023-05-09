import React from "react";
import PlantCard from "./PlantCard";

//make sure this is whatever is on the left side of the equal sign on PlantPage aka plants
function PlantList({plants}) {
  return (
    <ul className="cards">
      { 
      plants.map((plant) => (
        
      <PlantCard key={plant.id} plant={plant}/>
      /* render PlantCards components in here */
      
      ))}
      </ul>
  );
}

export default PlantList;

// "id": 1,
//       "name": "Aloe",
//       "image": "./images/aloe.jpg",
//       "price": 15.99
