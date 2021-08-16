import { useState } from "react";
import "./styles.css";
import React from "react";

const placeTypes = {
  "Hill Stations": [
    {
      name: "Darjeeling, West Bengal",
      description:
        " It's famed for the distinctive black tea grown on plantations that dot its surrounding slopes.",
      rating: "4.4"
    },
    {
      name: "Coorg, Karnataka",
      description:
        "It is well known for its breathtakingly exotic scenery and lush greenery.",
      rating: "4.5"
    },
    {
      name: "Manali, Himachal Pradesh",
      description:
        "Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley.",
      rating: "4.6"
    }
  ],

  Beaches: [
    {
      name: "Andaman & Nicobar Islands",
      description:
        " These roughly 300 islands are known for their palm-lined, white-sand beaches, mangroves and tropical rainforests.",
      rating: "4.7"
    },
    {
      name: "Palolem, South Goa",
      description:
        " It's known for its calm waters and for its nightlife, including 'silent discos' where partygoers wear headphones.",
      rating: "4.2"
    },
    {
      name: "Varkala, Kerala",
      description:
        "The cliffs adjoining the Papanasam beach looking over the Arabian sea is a special attraction found only in Varkala.",
      rating: "4.5"
    }
  ],

  Wonders: [
    {
      name: "Taj Mahal, Agra",
      description:
        "It is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.",
      rating: "4.7"
    },
    {
      name: "Hawa Mahal, Jaipur",
      description:
        "It is famous because of its amazing and unique architecture.",
      rating: "4.7"
    },
    {
      name: "Konark Sun Temple, Odisha",
      description:
        "It is a 13th-century CE Sun temple at Konark about 35 kilometres northeast from Puri on the coastline of Odisha, India.",
      rating: "4.6"
    }
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
              <span style={{ fontSize: "0.7rem" }}>{place.description}</span>
              <br />
              <span>⭐ {place.rating}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
