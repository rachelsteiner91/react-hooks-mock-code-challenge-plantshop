import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const initialForm = {
    name: "",
    image: "",
    price: 0
  }
  const [formData, setFormData] = useState(initialForm)
  // const [stateVariable, setStateFunction] =  useState(currentState)
  //the current state of formData is an object
//formData is the variable that has the value of the current state aka initialForm aka it has the value of an object
//setFormData carries the value of the const initialFOrm object, this function contains the power to UPDATE the current state, in this case it is an object aka initialForm
  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
//apply these instructions to all areas affected aka need to put onchange = handleChange 
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method:  'POST',
      body: JSON.stringify(formData),
      headers:  {
        'Content-Type' : 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        addPlant(data)
      })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={formData.name} type="text" name="name" placeholder="Plant name" onChange={(e) => handleChange(e)}/>
        <input value={formData.image}  type="text" name="image" placeholder="Image URL" onChange={(e) => handleChange(e)} />
        <input value={formData.price} type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => handleChange(e)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

//DELIVERABLE #2
//I can add a new plant to the page by submitting the form

//initial form template
//use state

//change function UPDATES current form state TO reflect 
//what user types in (e.target...etc.) by copying OG form object
//add value to EACH affected area ex: {formData.name}
//on change to EACH affected area ex: onChange={(e) => handleChange(e)}

//submit function 
// add onSubmit= {(e) => handleSubmit(e)} to the <form >
//POST - transferring anything the user puts into the input onto the db.json so that it populates on the page. what controls the stuff that populates on the page? PLANTPAGE. so I need to create an addPlant() function on PlantPage
//grab the data and addPlant with the data given. need to create addPlant function on plant page, need to pass it as props on NewPlantForm function and to call it in POST as the instruction 
//on submit