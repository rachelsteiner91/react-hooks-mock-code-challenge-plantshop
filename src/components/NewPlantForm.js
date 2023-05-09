import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

function handleChange(event) {
const name=event.target.name;
let value= event.target.value

setFormData({...formData, [name]: value})
}

function handleSubmit (e){
  e.preventDefault()
  fetch(' http://localhost:6001/plants ', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: {
    "Content-Type": "application/json"
  },
})
  .then(response => response.json())
  .then(newPlant => {
    addNewPlant(newPlant)
    setFormData({
      name: "",
      image: "",
      price: 0
  })})

}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name"
        value={formData.name}
        onChange={event => handleChange(event)} />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL"
        value={formData.image}
        onChange={event => handleChange(event)} />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price"
        value={formData.price}
        onChange={event => handleChange(event)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
  }

export default NewPlantForm;
