import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleHalfStroke} from "@fortawesome/free-solid-svg-icons";


function Item({ path, text, external = false, children}) {
  const match = useMatch(path);

  return <div className="w-12 h-12 mx-2 my-1 rounded-full flex justify-center items-center bg-gray-725
                         hover:rounded-xl hover:bg-gray-500 hover:text-slate-50
                         transition-all transform
                         relative group">
    <Link to={path} className="w-full h-full flex justify-center items-center" target={external ? "_blank" : undefined}>
      {children ? children : <FontAwesomeIcon icon="fa-solid fa-icons" />}
    </Link>

    <span className="absolute hidden left-full ml-2 bg-gray-500 px-2 rounded span-with-arrow scale-0
                     group-hover:block group-hover:scale-100
                     transition-all transform
                    "
    >
      {text}
    </span>

    <span className={`absolute w-3 ${match ? "h-10" : "h-4"} bg-slate-50 rounded -translate-x-10 transition-all transform`}>

    </span>
  </div>
}

const Sidebar = () => {
  return (
    <nav className="h-screen w-20 flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <Item path="/" text="Home">
          <FontAwesomeIcon icon={["fab", "discord"]} className="w-7 h-7"/>
        </Item>

        <span className="block w-2/3 h-0.5 bg-amber-700"></span>
      </div>

      <ul className="grow flex flex-col justify-start items-center">
        <li>
          <Item path="/about" text="About" />
          <Item path="/poke" text="Pokemon">
            <FontAwesomeIcon icon={faCircleHalfStroke} className="w-7 h-7 -rotate-90"/>
          </Item>
        </li>
      </ul>

      <div className="flex flex-col justify-center items-center">
        <span className="block w-2/3 h-0.5 bg-amber-700"></span>
        <ul className="grow flex flex-col justify-start items-center">
          <li>
            <Item path="https://www.linkedin.com/in/t%C3%A2y-l%C3%AA-ph%C6%B0%C6%A1ng-2b80651ba/"
                  text="LinkedIn"
                  external={true}>
              <FontAwesomeIcon icon={["fab", "linkedin"]} className="w-7 h-7"/>
            </Item>
          </li>
          <li>
            <Item path="https://github.com/lpwanw"
                  text="Github"
                  external={true}>
              <FontAwesomeIcon icon={["fab", "github"]} className="w-7 h-7"/>
            </Item>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
