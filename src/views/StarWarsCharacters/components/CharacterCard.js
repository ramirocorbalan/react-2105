function CharacterCard(props) {
  return (
    <div>
      <h2>{props.character.name}</h2>
      <ul>
        <li>birth_year: {props.character.birth_year}</li>
        <li>eye_color: {props.character.eye_color}</li>
        <li>gender: {props.character.gender}</li>
        <li>hair_color: {props.character.hair_color}</li>
      </ul>
    </div>
  );
}

export default CharacterCard;

/*
birth_year: "19BBY"
created: "2014-12-10T15:20:09.791000Z"
edited: "2014-12-20T21:17:50.315000Z"
eye_color: "brown"
films: (4) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
gender: "female"
hair_color: "brown"
height: "150"
 */
