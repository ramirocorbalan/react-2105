import CharacterCard from "./CharacterCard";

function CharactersList(props) {
  return (
    <div>
      {console.log(props.characters)}
      <ul>
        {props.characters.map((character, index) => {
          return (
            <li>
              <CharacterCard character={character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharactersList;
