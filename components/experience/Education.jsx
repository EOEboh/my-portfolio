import React from 'react';

const Education = ({ degree, major, year, school}) => {
  return (
<div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
    <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
      {year}
    </h1>
        <h1 className="font-semibold text-xl">{major}</h1>
            <p className="text-gray-600 dark:text-gray-400">{degree}</p>
             <p className="text-gray-600 dark:text-gray-400 my-2">{school}
             </p>
</div>
  )
}

export default Education