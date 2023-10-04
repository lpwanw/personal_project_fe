import React from 'react';
import {Route, Routes} from "react-router-dom";
import ListPage from "./poke/ListPage";
import ShowPage from "./poke/ShowPage";

export default function PokePage() {
  return(
    <div>
      <h2>Pokémon Page</h2>

      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path=":pokemonName" element={<ShowPage />} />
      </Routes>
    </div>
  )
}
