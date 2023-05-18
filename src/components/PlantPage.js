import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]= useState([])
  const [search, setSearch] = useState('')

useEffect(() => {
fetch ('http://localhost:6001/plants')
  .then(response => response.json())
  .then(data =>  setPlants(data))
},[])
// console.log(plants)

function addPlant(newPlant){
  setPlants(
    [...plants, newPlant]
)}

const filteredPlants = [...plants].filter((el) => {
  return el.name.toLowerCase().includes(search.toLowerCase())
 })
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch={setSearch} search={search}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;































// import React, {useState, useEffect} from "react";
// import NewPlantForm from "./NewPlantForm";
// import PlantList from "./PlantList";
// import Search from "./Search";

// function PlantPage() {
//   const [plants, setPlants] = useState([])
//   const [search, setSearch] = useState("")

//   useEffect(() => {
//     fetch(' http://localhost:6001/plants')
//     .then(response => response.json())
//     .then(plants => setPlants(plants))
//   }, [])

//   //function to ADD form plant TO current state of PLANTS
//   //UPDATES current state of plants
//   //update this array of plants to now include what we are adding to the form,we did a similar thing to the handleChange function
// function addPlant(plant) {
//   setPlants(
//     //copies the OG plants array
//   //ADDS A PLACEHOLDER FOR THE NEW PLANT
//     [...plants, plant]
//     //returns the copy of the OG with the NEW
//   )
// }

// //DELIVERABLE #4
// const filteredPlants = [...plants].filter((el) => {
//   //this is saying IF the name that exists here, for example "Aloe" includes what I have typed, RETURN IT. if it doesn't don't return it.
//   return el.name.toLowerCase().includes(search.toLowerCase())
// })


//   return (
//     <main>
//       <NewPlantForm addPlant={addPlant}/>
//       <Search search={search} setSearch={setSearch} />
//       <PlantList plants={filteredPlants} />
//     </main>
//   );
// }

// export default PlantPage;

//when the app starts, I can see all plants
//use state use effect
//GET/fetch
//pass down state to children

//DELIVERABLE #4  
//filter needs to live in the parent component, so filter will live here
//also replace the {plants} to {filteredPlants} within PlantList