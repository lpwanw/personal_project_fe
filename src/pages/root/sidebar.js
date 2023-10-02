import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Item({ path, text, children}) {
  const match = useMatch(path);

  return <div className="w-12 h-12 m-2 rounded-full flex justify-center items-center bg-gray-725
                         hover:rounded-xl hover:bg-gray-500 hover:text-slate-50
                         transition-all transform
                         relative group">
    <Link to={path} className="w-full h-full flex justify-center items-center">
      {children ? children : <FontAwesomeIcon icon="fa-solid fa-icons" />}
    </Link>

    <span className="absolute hidden left-full ml-2 bg-gray-500 px-2 rounded span-with-arrow scale-0
                     group-hover:block group-hover:scale-100
                     transition-all transform
                    "
    >
      {text}
    </span>


    <span className={`absolute w-2 ${match ? "h-10" : "h-4"} bg-slate-50 rounded -translate-x-10 transition-all transform`}>

    </span>
  </div>
}

const Sidebar = () => {
  return (
    <nav className="h-screen w-20">
      <div className="flex flex-col justify-center items-center">
        <Item path="/" text="Home">
          <FontAwesomeIcon icon={["fab", "discord"]} className="w-7 h-7"/>
        </Item>

        <span className="block w-2/3 h-0.5 bg-amber-700"></span>
      </div>

      <ul className="flex flex-col justify-center items-center">
        <li>
          <Item path="/about" text="About" />
        </li>
      </ul>

      <div className="flex flex-col justify-center items-center">
        Bottom
      </div>
    </nav>
  );
}

export default Sidebar;
