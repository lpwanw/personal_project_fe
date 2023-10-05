import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Type from "../../../components/pokemon/Type";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faForward} from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex border border-slate-500 hover:border-slate-200 rounded-xl p-2">
      <div className="w-1/2">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showIndicators={false} showArrows={false} showStatus={false}>
          {Object.entries(pokemon.sprites).filter(([key, value]) => { return value}).map(([key, value]) => {
            return <img key={key} src={value} alt={key} className="h-20 object-contain"/>;
          })}
        </Carousel>
      </div>
      <ul className="grow">
        <li className="flex"><p className="mr-2">Name: </p><p className="first-letter:uppercase">{pokemon.name}</p></li>
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
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const limit = 20;
    const offset = page * limit;
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        setTotalPage(Math.round(data.count / limit))
      })
      .catch(err => console.error(err));
  }, [page]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPage(event.selected)
  };

  if (!pokemons) return <div>Loading...</div>;

  return(<>
    <div className="grid grid-cols-4 gap-4">
      {
        pokemons.map(pokemon => {
          return <PokemonItem key={pokemon.name} pokeName={pokemon.name}/>
        })
      }
    </div>
    <ReactPaginate
        breakLabel="..."
        nextLabel={page === (totalPage - 1) ? null : <FontAwesomeIcon icon={faForward} />}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center border mt-4 p-2 w-full"
        pageClassName="border rounded mx-2 px-2"
        activeClassName={`bg-slate-500`}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel={page === 0 ? null : <FontAwesomeIcon icon={faBackward} />}
        renderOnZeroPageCount={null}
    />
  </>)
}
