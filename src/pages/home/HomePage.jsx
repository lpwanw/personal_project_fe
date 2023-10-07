import React, {useEffect, useState} from 'react';
import {motion, useScroll} from "framer-motion"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubAlt, faLinkedinIn, faReact} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {faDatabase, faFire, faGem, faMoon, faSun, faTableColumns} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as RailsSVG } from "../../assets/svg/rails.svg";
import { ReactComponent as TailwindSVG } from "../../assets/svg/tailwind.svg";
import { ReactComponent as DockerSVG } from "../../assets/svg/docker.svg";
import sunLogo from "../../assets/logo-sun.png"
import sguLogo from "../../assets/sgu.png"
import mindXLogo from "../../assets/mindx.png"
import {Carousel} from "react-responsive-carousel";

function BasicInfo() {
  return(
    <div className={`flex flex-col md:flex-row justify-between items-center w-full sm:col-span-2`}>
      <div className={`flex flex-col md:flex-row items-center`}>
        <img
          src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
          alt="logo"
          className={`h-14 w-14`}
        />
        <div className={`flex flex-col items-center md:items-start md:ml-4`}>
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
    <div className={`flex flex-col items-center sm:items-start border rounded-xl border-slate-400 p-3 sm:col-span-2`}>
      <h1 className={`text-sm text-gray-400`}>About Me:</h1>
      <div className={`flex flex-wrap justify-center items-center text-2xl`}>
        <h1 className={`text-gray-400 font-mono`}>{'{{' }</h1>
        <h1>Software-Engineering</h1>
        <h1 className={`text-gray-400 font-mono`}>{'}}' }</h1>
        <h1><FontAwesomeIcon icon={faGem} className={`px-2`}/> Rubyist</h1>
      </div>
      {/*Tech Stack*/}
      <ul className={`w-full flex gap-2 overflow-x-auto whitespace-nowrap my-2`}>
        <li className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
          <RailsSVG className={`w-5 h-5 object-cover mx-1`}/>
          Ruby on Rails
        </li>
        <li className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
          <TailwindSVG className={`w-5 h-5 object-cover mx-1`}/>
          Tailwind CSS
        </li>
        <li className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
          <FontAwesomeIcon icon={faReact} className={`w-5 h-5 object-cover mx-1 animate-spin-slow text-[#61DBFB]`}/>
          React
        </li>
        <li className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
          <FontAwesomeIcon icon={faDatabase} className={`w-5 h-5 object-cover mx-1`}/>
          SQL Database
        </li>
      </ul>
      <p className={`text-center sm:text-left`}>
        Dedicated Ruby backend developer with over 2 years of experience in crafting scalable applications.
        Eager to leverage technical expertise in a collaborative setting, driving innovation and efficiency.
      </p>
    </div>
  )
}

function Experience() {
  const experiences = [
    {
      img: sunLogo,
      position: "Ruby on Rails Developer",
      place: "Sun *",
      timeline: "Dec 2021 - Now"
    },
    {
      img: mindXLogo,
      position: "Kid Teen Teacher",
      place: "MindX",
      timeline: "Teaching programing for kid. Dec 2020 - Now"
    },
    {
      img: sguLogo,
      position: "Degree of Engineer",
      place: "Sai Gon University",
      timeline: "GPA: 3.0. 2018 - 2023"
    }
  ]
  return (
    <div className={`border rounded-xl w-full border-slate-400 p-3 sm:col-span-2`}>
      <h1 className={`font-bold`}>Experience</h1>
      {
        experiences.map((experience, index) => {
          return(
            <div key={index} className={`flex flex-col sm:flex-row sm:justify-between items-center mt-2 pb-2 sm:border-b-2`}>
              <div className={`flex flex-col sm:flex-row items-center`}>
                <img src={experience.img} alt={`logo_${index}`} className={`w-12 mr-3`}/>
                <h1>{experience.position} @<span className={`font-bold ml-1`}>{experience.place}</span></h1>
              </div>
              <div>
                {experience.timeline}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

function Menu({dark, toggleDark}) {
  const { scrollYProgress } = useScroll();

  return(
    <div className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 border border-slate-700 rounded-xl p-2 dark:bg-slate-800 bg-gray-200`}>
      <div className={`flex gap-4`}>
        <Link to={`/`} className={`flex items-center`}>
          <FontAwesomeIcon icon={faTableColumns} className={`border dark:border-slate-600 h-4 w-4 p-2 rounded-md`}/>
          <h1>Portfolio</h1>
        </Link>
        <Link to={`/about`} className={`flex items-center`}>
          <FontAwesomeIcon icon={faFire} className={`border dark:border-slate-600 h-4 w-4 p-2 rounded-md ml-2`}/>
          <h1 className={`whitespace-nowrap`}>Fun stuff</h1>
        </Link>
        <button onClick={toggleDark} className={`flex items-center`}>
          <FontAwesomeIcon icon={dark ? faMoon: faSun} className={`border dark:border-slate-600 h-4 w-4 p-2 rounded-md`}/>
        </button>
      </div>
      <motion.div className={`w-full h-1 bg-amber-400 origin-left rounded`} style={{ scaleX: scrollYProgress }}></motion.div>
    </div>
  )
}

function SlideShow() {
  return(
    <motion.div initial={{ translate: `0% 100%` }} whileInView={{ translate: `0% 0%` }} viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.8
                }}
                className={`border border-slate-400 rounded-xl sm:max-w-sm mx-auto`}
    >
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showIndicators={false} showStatus={false}>
        <img src="https://stickershop.line-scdn.net/stickershop/v1/product/16175/LINEStorePC/main.png" alt="Doraemon1"/>
        <img src="https://stickershop.line-scdn.net/stickershop/v1/product/16176/LINEStorePC/main.png" alt="Doraemon2"/>
      </Carousel>
    </motion.div>
  )
}

function ScrollSlide() {
  return(
    <motion.div initial={{ translate: `0% 100%` }} whileInView={{ translate: `0% 0%` }} viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.8,
                }}
                className={`flex justify-center w-full border border-slate-400 rounded-xl sm:max-w-sm max-h-sm mx-auto p-2`}
    >
      <div className={`flex w-full gap-2 overflow-hidden`}>
        <motion.div
          className={`flex gap-2 whitespace-nowrap`}
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 20
          }}
        >
          {/* Content 1 */}
          <div className={`flex gap-2 ml-2`}>
            <div className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
              <RailsSVG className={`w-52 h-52 object-cover mx-1`}/>
            </div>
            <div className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
              <FontAwesomeIcon icon={faReact} className={`w-52 h-52 object-cover mx-1 text-[#61DBFB] animate-spin-slow`}/>
            </div>
            <div className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
              <FontAwesomeIcon icon={faDatabase} className={`w-52 h-52 object-cover mx-1`}/>
            </div>
            <div className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
              <TailwindSVG className={`w-52 h-52 object-cover mx-1`}/>
            </div>
            <div className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
              <DockerSVG className={`w-52 h-52 object-cover mx-1`}/>
            </div>
          </div>
          {/* Duplicate of Content 1 */}
          <div className={`flex gap-2`}>
            <div className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
              <RailsSVG className={`w-52 h-52 object-cover mx-1`}/>
            </div>
            <div className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
              <FontAwesomeIcon icon={faReact} className={`w-52 h-52 object-cover mx-1 text-[#61DBFB] animate-spin-slow`}/>
            </div>
            <div className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
              <FontAwesomeIcon icon={faDatabase} className={`w-52 h-52 object-cover mx-1`}/>
            </div>
            <div className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
              <TailwindSVG className={`w-52 h-52 object-cover mx-1`}/>
            </div>
            <div className={`flex justify-center items-center border rounded-xl text-sm p-1 px-2`}>
              <DockerSVG className={`w-52 h-52 object-cover mx-1`}/>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer initial={{ translate: `0% 100%` }} whileInView={{ translate: `0% 0%` }} viewport={{ once: true }}
                   transition={{
                     type: "spring",
                     bounce: 0.5,
                     duration: 0.8,
                   }}
      className="w-full bg-slate-400 dark:bg-slate-800 p-4 mt-4 border-t rounded-xl dark:border-slate-600 sm:col-span-2">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <div className="text-sm text-slate-200 dark:text-slate-500">
          © {currentYear} Le Phuong Tay. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/lpwanw" target="_blank" rel="noopener noreferrer" className="text-slate-200 dark:text-slate-500 hover:text-slate-100 dark:hover:text-slate-400">
            <FontAwesomeIcon icon={faGithubAlt} className="h-5" />
          </a>
          <a href="https://bit.ly/lpwanw_linkedin" target="_blank" rel="noopener noreferrer" className="text-slate-200 dark:text-slate-500 hover:text-slate-100 dark:hover:text-slate-400">
            <FontAwesomeIcon icon={faLinkedinIn} className="h-5" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default function HomePage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (dark && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark]);

  return(
    <div className={`w-full flex justify-center dark:bg-slate-900 dark:text-slate-300 transition-all duration-300`}>
      <div className={`grid grid-cols-1 sm:grid-cols-2  p-2 gap-4 max-w-3xl`}>
        <Menu dark={dark} toggleDark={() => setDark(!dark)}/>
        <BasicInfo />
        <OverView />
        <Experience />
        <SlideShow />
        <ScrollSlide />
        <Footer />
        <div className={`h-20`}>
        </div>
      </div>
    </div>
  )
}
