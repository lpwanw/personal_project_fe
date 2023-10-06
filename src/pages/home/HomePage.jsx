import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubAlt, faLinkedinIn, faReact} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {faDatabase, faFire, faGem, faTableColumns} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as RailsSVG } from "../../assets/svg/rails.svg";
import { ReactComponent as TailwindSVG } from "../../assets/svg/tailwind.svg";
import sunLogo from "../../assets/logo-sun.png"

function BasicInfo() {
  return(
    <div className={`flex flex-col items-center w-full`}>
      <div className={`flex flex-col items-center`}>
        <img
          src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
          alt="logo"
          className={`h-14 w-14`}
        />
        <div className={`flex flex-col items-center `}>
          <h1 className={`bold`}>Le Phuong Tay</h1>
          <p>Software Engineering</p>
        </div>
      </div>

      <ul className={`flex gap-4`}>
        <li className={`flex border rounded-xl justify-center items-center h-10 w-10`}>
          <Link to={`https://github.com/lpwanw`} target={`_blank`} className={`leading-none`}>
            <FontAwesomeIcon icon={faGithubAlt} className={`h-6`}/>
          </Link>
        </li>

        <li className={`flex border rounded-xl justify-center items-center h-10 w-10`}>
          <Link to={`https://bit.ly/lpwanw_linkedin`} target={`_blank`} className={`leading-none`}>
            <FontAwesomeIcon icon={faLinkedinIn} className={`h-6`}/>
          </Link>
        </li>
      </ul>
    </div>
  )
}
function OverView() {
  return(
    <div className={`flex flex-col items-center border rounded-xl border-slate-400 p-3`}>
      <h1 className={`text-sm text-gray-400`}>About Me:</h1>
      <div className={`flex flex-wrap justify-center items-center text-2xl`}>
        <h1 className={`text-gray-400 font-mono`}>{'{{' }</h1>
        <h1>Software-Engineering</h1>
        <h1 className={`text-gray-400 font-mono`}>{'}}' }</h1>
        <h1><FontAwesomeIcon icon={faGem} className={`px-2`}/> Rubyist</h1>
      </div>
      {/*Tech Stack*/}
      <ul className={`w-full flex gap-2 overflow-x-auto whitespace-nowrap mb-2`}>
        <li className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
          <RailsSVG className={`w-5 h-5 object-cover mx-1`}/>
          Ruby on Rails
        </li>
        <li className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
          <TailwindSVG className={`w-5 h-5 object-cover mx-1`}/>
          Tailwind CSS
        </li>
        <li className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
          <FontAwesomeIcon icon={faReact} className={`w-5 h-5 object-cover mx-1`}/>
          React
        </li>
        <li className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
          <FontAwesomeIcon icon={faDatabase} className={`w-5 h-5 object-cover mx-1`}/>
          SQL Database
        </li>
      </ul>
      <p className={`text-center`}>
        Dedicated Ruby backend developer with over 2 years of experience in crafting scalable applications.
        Eager to leverage technical expertise in a collaborative setting, driving innovation and efficiency.
      </p>
    </div>
  )
}

function Experience() {
  return (
    <div className={`border rounded-xl border-slate-400 p-3`}>
      <h1 className={`font-bold`}>Experience</h1>
      <div className={`flex flex-col items-center mb-2`}>
        <div className={`flex flex-col items-center`}>
          <img src={sunLogo} alt="logo-sun" className={`w-12`}/>
          <h1>Ruby on Rails Developer @<span className={`font-bold ml-1`}>Sun *</span></h1>
        </div>
        <div>
          Dec 2021 - Now
        </div>
      </div>

      <div className={`flex flex-col items-center`}>
        <div className={`flex flex-col items-center`}>
          <img src={sunLogo} alt="logo-sun" className={`w-12`}/>
          <h1>Ruby on Rails Developer @<span className={`font-bold ml-1`}>Sun *</span></h1>
        </div>
        <div>
          Dec 2021 - Now
        </div>
      </div>
    </div>
  )
}

function Menu() {
  return(
    <div className={`fixed flex gap-4 border border-slate-700 rounded-xl p-2 bg-gray-200 bottom-5 left-1/2 -translate-x-1/2`}>
      <Link to={`/`} className={`flex items-center`}>
        <FontAwesomeIcon icon={faTableColumns} className={`border h-4 w-4 p-2 rounded-md`}/>
        <h1>Portfolio</h1>
      </Link>
      <Link to={`/about`} className={`flex items-center`}>
        <FontAwesomeIcon icon={faFire} className={`border h-4 w-4 p-2 rounded-md ml-2`}/>
        <h1 className={`whitespace-nowrap`}>Fun stuff</h1>
      </Link>
    </div>
  )
}

export default function HomePage() {
  return(
    <div className={`grid grid-cols-1 p-2 gap-4`}>
      <Menu />
      <BasicInfo />
      <OverView />
      <Experience />
      <Experience />
      <Experience />
    </div>
  )
}
