import React from 'react';
import Image from 'next/image';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from './RainbowHighlight';

import { MdArticle, MdDownload } from 'react-icons/md';

import userData from '../constants/data';

const Hero = () => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6", "#02044A"]


  return (
    <>
    <div className="flex flex-row justify-center items-start overflow-hidden">
      
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20 p-5">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Web Developer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Technical Writer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Open Source Enthusiast
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Content Creator
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      
      {/* Image container */}
      <div className="hidden  lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          {/* <img src={userData.avatarUrl} alt="avatar" className=" shadow" /> */}
          <Image 
            src='/me.jpg' 
            alt= 'My Picture' 
            width={500}
            height={600}
            />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That&apos;s me ????</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div className='grid gap-2 grid-cols-2 p-5'>
    <button className="bg-gray-300 border hover:border-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center  md:text-5xl my-2">
    <a
                  href="/files/myCVEngineering.pdf"
                  target="__blank"
                  rel="noopener noreferrer" 
                  download
                >
   <MdDownload />
  <span>Resume/CV</span>
  </a>
</button>
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center md:text-5xl my-4">
    <a
                  href="https://captain-eo.hashnode.dev/"
                  target="__blank"
                  rel="noopener noreferrer"
                >
            <MdArticle />      
  <span>Blog</span>
  </a>
</button>
</div>

    </>
  );
}

export default Hero;
