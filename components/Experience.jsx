import React from 'react';
import userData from '../constants/data';
import ExperienceCard from './experience/ExperienceCard';
import Education from './experience/Education';

const Experience = () => {
  return (
      <>
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl font-bold py-20 text-center md:text-left text-orange-500">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20 p-5">
          {/* Experience card */}
          {userData.experience.map((exp, i) => (
            <>
              <ExperienceCard
                key={i}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {i === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>

<section className="bg-white dark:bg-gray-800">  
    <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl font-bold py-20 text-center md:text-left text-orange-500 ">
            Education
        </h1>
    </div>
    <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4 p-5">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.education.map((edu, i) => (
            <>
              <Education
                key={i}
                degree={edu.degree}
                major={edu.major}
                year={edu.year}
                school={edu.school}
              />
              {i === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
</section>
</>
 )
}

export default Experience