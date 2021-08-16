import { useState } from "react";
import "./styles.css";
import React from "react";

const placeTypes = {
  "Hill Stations": [
    { name: "Darjeeling", rating: "4.4" },
    { name: "Coorg", rating: "4.5" },
    { name: "Manali", rating: "4.6" }
  ],

  Beaches: [
    { name: "Andaman & Nicobar Islands", rating: "4.7" },
    { name: "Palolem, South Goa", rating: "4.2" },
    { name: "Varkala, Kerala", rating: "4.5" }
  ],

  Wonders: [
    { name: "Taj Mahal, Agra", rating: "4.7" },
    { name: "Hawa Mahal, Jaipur", rating: "4.7" },
    { name: "Konark Sun Temple, Odisha", rating: "4.6" }
  ]
};

let places = Object.keys(placeTypes);

export default function App() {
  let [selectedPlace, setPlaces] = useState("Hill Stations");

  function changeHandler(place) {
    setPlaces(place);
  }
  return (
    <div className="App">
      <h1>
        <span>🚆</span> DREAMTRIPS
      </h1>
      <p>Checkout my dream locations to visit in India!</p>

      <div>
        {places.map((placeType) => (
          <button onClick={() => changeHandler(placeType)}>{placeType}</button>
        ))}
      </div>
      <hr />
      <div className="recommendations">
        <ul style={{ paddingInlineStart: "0" }}>
          {placeTypes[selectedPlace].map((place) => (
            <li key={place.name}>
              {place.name}
              <br />
              <span>⭐ {place.rating}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
