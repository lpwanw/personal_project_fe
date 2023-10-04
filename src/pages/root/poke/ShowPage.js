import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function ShowPage() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Fetch individual Pokémon data
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(err => console.error(err));
  }, [pokemonName]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h3>{pokemon.name}</h3>
      {/* Other Pokémon details */}
    </div>
  );
}
