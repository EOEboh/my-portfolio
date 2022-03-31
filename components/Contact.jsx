import React, {useState} from 'react';
import userData from '../constants/data';
import Form from './contact/Form';

// react icons
import { IconContext } from "react-icons";
import { MdEmail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'


const Contact = () => {

  return (
    <section>
      <div className="max-w-6xl mx-auto mb-16 h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left ">
          Contact Me
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Got an offer for me? Or a project we can work on?
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill in the details and I&apos;ll get back to you as soon as I can.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
              <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>             
                     <MdEmail />         
              </IconContext.Provider>
                <p className="text-gray-50 font-light text-sm">
                  {userData.email}
                </p>
              </div>

              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
              <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>             
                     <BsTwitter />         
              </IconContext.Provider>
                <p className="text-gray-50 font-light text-sm">
                  {userData.socialLinks.twitter}
                </p>
              </div>
            </div>
            
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact