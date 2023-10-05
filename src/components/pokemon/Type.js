import React from "react";

import { ReactComponent as Bug } from "../../assets/svg/bug.svg";
import { ReactComponent as Dark } from "../../assets/svg/dark.svg";
import { ReactComponent as Dragon } from "../../assets/svg/dragon.svg";
import { ReactComponent as Electric } from "../../assets/svg/electric.svg";
import { ReactComponent as Fairy } from "../../assets/svg/fairy.svg";
import { ReactComponent as Fighting } from "../../assets/svg/fighting.svg";
import { ReactComponent as Fire } from "../../assets/svg/fire.svg";
import { ReactComponent as Flying } from "../../assets/svg/flying.svg";
import { ReactComponent as Ghost } from "../../assets/svg/ghost.svg";
import { ReactComponent as Grass } from "../../assets/svg/grass.svg";
import { ReactComponent as Ground } from "../../assets/svg/ground.svg";
import { ReactComponent as Ice } from "../../assets/svg/ice.svg";
import { ReactComponent as Normal } from "../../assets/svg/normal.svg";
import { ReactComponent as Poison } from "../../assets/svg/poison.svg";
import { ReactComponent as Psychic } from "../../assets/svg/psychic.svg";
import { ReactComponent as Rock } from "../../assets/svg/rock.svg";
import { ReactComponent as Steel } from "../../assets/svg/steel.svg";
import { ReactComponent as Water } from "../../assets/svg/water.svg";

const icons = {
  bug: Bug,
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fairy: Fairy,
  fighting: Fighting,
  fire: Fire,
  flying: Flying,
  ghost: Ghost,
  grass: Grass,
  ground: Ground,
  ice: Ice,
  normal: Normal,
  poison: Poison,
  psychic: Psychic,
  rock: Rock,
  steel: Steel,
  water: Water
}

const colors = {
  bug: "#A8B820",     // Bug: Greenish
  dark: "#705848",    // Dark: Dark brown
  dragon: "#7038F8",  // Dragon: Dark purple
  electric: "#F8D030",// Electric: Yellow
  fairy: "#EE99AC",   // Fairy: Light pink
  fighting: "#C03028",// Fighting: Reddish brown
  fire: "#F08030",    // Fire: Orangish-red
  flying: "#A890F0",  // Flying: Sky blue
  ghost: "#705898",   // Ghost: Darker purple
  grass: "#78C850",   // Grass: Green
  ground: "#E0C068",  // Ground: Earthy brown
  ice: "#98D8D8",     // Ice: Light cyan
  normal: "#A8A878",  // Normal: Khaki
  poison: "#A040A0",  // Poison: Purple
  psychic: "#F85888", // Psychic: Pinkish
  rock: "#B8A038",    // Rock: Brownish
  steel: "#B8B8D0",   // Steel: Steel blue
  water: "#6890F0"    // Water: Blue
}


export default function Type({type}) {
  const TypeSVG = icons[type]
  const color = colors[type]

  return (
    <div className="group relative inline">
      <TypeSVG className={`peer inline h-7 w-7 mx-2`} style={{fill: color}}/>
      <TypeSVG className={`absolute top-0 left-0 scale-150 mx-2 hidden h-7 w-7 peer-hover:inline peer-hover:animate-ping pointer-events-none`} style={{fill: color}}/>
      <span className="hidden absolute group-hover:inline top-full right-1/2 left-1/2">{type}</span>
    </div>
  );
}
