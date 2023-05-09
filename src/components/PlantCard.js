import React, {useState} from "react";

// 3. I can mark a plant as "sold out".
function PlantCard({plant}) {
  const [isClicked, setIsClicked] = useState(true)

  function handleClick() {
    setIsClicked(!isClicked)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isClicked? (
        <button onClick={handleClick}className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

// "id": 1,
// "name": "Aloe",
// "image": "./images/aloe.jpg",
// "price": 15.99