import React from 'react';
import userData from '../constants/data';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';


const AboutMe = () => {
  return (
    
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 text-orange-500">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me
        </h1>
      </div>
      <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-4xl md:text-3xl text-orange-500 font-bold  mx-4 "
            style={{ lineHeight: "3rem" }}
          >
            Software Development
          </p>
     </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900 p-5">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title1}
            
          </p>
        </div>
      </div>
      <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-4xl md:text-3xl font-bold  mx-4 text-orange-500"
            style={{ lineHeight: "3rem" }}
          >
            Technical Writing
          </p>
     </div>
     <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20 p-5">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title2}
            
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col p-5">
            
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 text-orange-500">
                Open to Work
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I&apos;m looking for a job currently. Kindly check out my {" "}
                <a
                  href="/files/myCV1.pdf"
                  target="__blank"
                  rel="noopener noreferrer"
                  download
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  Resume
                </a>{" "}. Feel free to reach out to me.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-3">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-1 dark:text-gray-300">
                You can contact me via my {" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  e-mail
                </a>{" "}. I would always get back to you. <br/>
                You can also reach me via my social accounts below.
              </p>
            </div>
            {/* Social Links */}
            
            <div className="mt-4 ml-4">
              
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter <BsTwitter />
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn <BsLinkedin/>
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub <BsGithub/>
                  </p>
                </a>
              </div>   
            </div>  
          </div>
          
          
     
          {/* Text area */}
          <div className="col-span-1 md:col-span-2 p-5">
            

            <h1 className="bg-transparent text-black text-4xl rounded-md px-2 py-1 inline-block font-bold text-orange-500">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8 ">
              <img
                src="/javascript.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              
              <img
                src="typescript.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              <img
                src="node.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              <img
                src="mongo.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              <img
                src="html.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              <img
                src="css.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              
              <img
                src="git.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              <img
                src="react.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              <img
                src="solidity.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              <img
                src="nextjs.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              <img
                src="gatsby.png"
                className="h-20 w-20 mx-4 my-4 rounded-3xl"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
