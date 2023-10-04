import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Type from "../../../components/pokemon/Type";

function PokemonItem({pokeName}) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Fetch individual Pokémon data
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokeName}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(err => console.error(err));
  }, [pokeName]);

  if (!pokemon) return <div>Loading...</div>;

  return(
    <div className="flex border border-slate-500 hover:border-slate-200 rounded-xl p-4">
      <div className="w-1/2">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showIndicators={false} showArrows={false} showStatus={false}>
          {Object.entries(pokemon.sprites).filter(([key, value]) => { return value}).map(([key, value]) => {
            return <img key={key} src={value} alt={key} className="h-20 object-contain"/>;
          })}
        </Carousel>
      </div>
      <ul className="grow">
        <li>Name: {pokemon.name}</li>
        <li>
          {pokemon.types.map(type => { return <Type key={type.slot} className="mr-1" type={type.type.name}></Type>})}
        </li>
        <li>
          <Link to={`${pokeName}`} className="block border rounded text-center mt-6 p-1 hover:bg-slate-700">
            See Detail
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default function ListPage() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    // Fetch individual Pokémon data
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => response.json())
      .then(data => setPokemons(data))
      .catch(err => console.error(err));
  }, []);

  if (!pokemons) return <div>Loading...</div>;

  return(<>
    <div className="grid grid-cols-4 gap-4">
      {
        pokemons.results.map(pokemon => {
          return <PokemonItem key={pokemon.name} pokeName={pokemon.name}/>
        })
      }
    </div>
  </>)
}
