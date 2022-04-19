import { useState, useEffect } from "react";

import axios from "axios";
import CharactersList from "./components/CharacterList";

function StarWarsCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios("https://swapi.dev/api/people")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(characters);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <CharactersList characters={characters} />
    </div>
  );
}

export default StarWarsCharacters;
