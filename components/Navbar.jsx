import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useTheme } from 'next-themes';

// react-icons
import { IconContext } from "react-icons";
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { SiHashnode } from 'react-icons/si';

import userData from '..//constants/data';

const Navbar = () => {
  const router = useRouter();

  const { theme, setTheme } = useTheme();



  return (
    <div> <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
    <div className="flex  md:flex-row justify-between items-center">
      {/* Logo / Home / Text */}

      <div className="flex flex-col">
        <Link href="/">
          <a>
            <h1 className="font-semibold text-xl dark:text-gray-100">
              {userData.name}
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-300">
              {userData.designation}
            </p>
          </a>
        </Link>
      </div>

      <div className="space-x-8 hidden md:block">
        <Link href="/aboutme">
          <a
            className={`text-base  ${
              router.asPath === "/aboutme"
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            About Me{" "}
            {router.asPath === "/aboutme" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={`text-base  ${
              router.asPath === "/projects"
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Projects
            {router.asPath === "/projects" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </a>
        </Link>
        <Link href="/experience">
          <a
            className={`text-base  ${
              router.asPath === "/experience"
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Experience{" "}
            {router.asPath === "/experience" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={`text-base  ${
              router.asPath === "/contact"
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Contact
            {router.asPath === "/contact" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </a>
        </Link>
      </div>

      <div className="space-x-4 flex flex-row items-center">  
      
      <IconContext.Provider
            value={{color: '#00acee'}}>  
        <a
          href={userData.socialLinks.twitter}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <BsTwitter/>
        </a>
      </IconContext.Provider>

      <IconContext.Provider
            value={{color: '#0e76a8'}}> 
        <a
          href={userData.socialLinks.linkedin}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <BsLinkedin />
        </a>
      </IconContext.Provider>

      <IconContext.Provider
            value={{color: '#171515'}}> 
        <a
          href={userData.socialLinks.github}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <BsGithub />
        </a>
      </IconContext.Provider>

      <IconContext.Provider
            value={{color: '#00acee'}}>
        <a
          href={userData.socialLinks.hashnode}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <SiHashnode />
        </a>
     </IconContext.Provider>

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 rounded focus:outline-none"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          { theme === 'dark' ? 
          (<IconContext.Provider value={{color: '#F4E99B', size: '25px'}}> 
          <MdLightMode />
          </IconContext.Provider>)         
           : (
            <IconContext.Provider value={{color: '#4c4f4f', size: '25px'}}> 
           <MdDarkMode />
           </IconContext.Provider>) }
        </button>
      </div>
    </div>

    {/* mobile navbar */}
    <div className="space-x-8 block md:hidden mt-4">
      <Link href="/aboutme">
        <a className="text-base font-normal text-gray-600 dark:text-gray-300">
          About Me
        </a>
      </Link>
      <Link href="/projects">
        <a className="text-base font-normal text-gray-600 dark:text-gray-300">
          Projects
        </a>
      </Link>
      <Link href="/experience">
        <a className="text-base font-normal text-gray-600 dark:text-gray-300">
          Experience
        </a>
      </Link>
      <Link href="/contact">
        <a className="text-base font-normal text-gray-600 dark:text-gray-300">
          Contact
        </a>
      </Link>
    </div>
  </div></div>
  )
}

export default Navbar