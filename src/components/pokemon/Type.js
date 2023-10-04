import React from "react";

import bug from "../../assets/svg/bug.svg"
import dark from "../../assets/svg/dark.svg"
import dragon from "../../assets/svg/dragon.svg"
import electric from "../../assets/svg/electric.svg"
import fairy from "../../assets/svg/fairy.svg"
import fighting from "../../assets/svg/fighting.svg"
import fire from "../../assets/svg/fire.svg"
import flying from "../../assets/svg/flying.svg"
import ghost from "../../assets/svg/ghost.svg"
import grass from "../../assets/svg/grass.svg"
import ground from "../../assets/svg/ground.svg"
import ice from "../../assets/svg/ice.svg"
import normal from "../../assets/svg/normal.svg"
import poison from "../../assets/svg/poison.svg"
import psychic from "../../assets/svg/psychic.svg"
import rock from "../../assets/svg/rock.svg"
import steel from "../../assets/svg/steel.svg"
import water from "../../assets/svg/water.svg"

const icons = {
  bug: bug,
  water: water,
  normal: normal,
  dark: dark,
  dragon: dragon,
  electric: electric,
  fairy: fairy,
  fighting: fighting,
  fire: fire,
  flying: flying,
  ghost: ghost,
  grass: grass,
  ground: ground,
  ice: ice,
  poison: poison,
  psychic: psychic,
  rock: rock,
  steel: steel
}

export default function Type({type}) {
  return (
    <div className="group relative inline">
      <img src={icons[type]} alt="none" className="inline h-5 w-5 mx-2"/>
      <span className="hidden absolute group-hover:inline top-full right-1/2 left-1/2">{type}</span>
    </div>
  );
}
