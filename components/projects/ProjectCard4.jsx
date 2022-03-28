import React from 'react'

const ProjectCard4 = ({title, link, number}) => {
  return (
    <>
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <h1 className=" bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
        <h1 className=" top-10 left-10 text-gray-50 font-bold text-xl bg-sky-800 rounded-md px-2 py-2">
          {title}
        </h1>
      </div>    
    </a>
  </>
  )
}

export default ProjectCard4