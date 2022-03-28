import React from 'react';
import userData from '../constants/data';
import ProjectCard1 from './projects/ProjectCard1';
import ProjectCard2 from './projects/ProjectCard2';
import ProjectCard3 from './projects/ProjectCard3';
import ProjectCard4 from './projects/ProjectCard4';

import axios from 'axios';
import { useQuery } from 'react-query';

// fetching articles using the hashnode graphql api
const endpoint = 'https://api.hashnode.com/';
const ARTICLE_QUERY = `
  {
    user(username: "captain-eo") {
      publication {
        posts(page: 0) {
          title
          brief
          slug
          coverImage
        }
      }
    }
  }
  
`;


const Projects = () => {
   
    const {data, isLoading, error } = useQuery("launches", () => {
        return axios({
          url: endpoint,
          method: "POST",
          data: {
            query: ARTICLE_QUERY
          }
        }).then(response => response.data.data);
      });
    
      if (isLoading) return "Loading...";
      if (error) return <pre>{error.message}</pre>;

    
  return (
    
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          My Projects
        </h1>
      </div>
      {/* Grid starts here */}

      <section className='react-projects'> 
      <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-4xl md:text-3xl font-bold  mx-4 "
            style={{ lineHeight: "3rem" }}
          >
            React Projects
          </p>
     </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.reactProjects.map((proj, i) => (
            <ProjectCard1
              key={i}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${i + 1}`}
            />
          ))}
        </div>
      </div>
      </section>

      <section className='js-projects'> 
      <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-4xl md:text-3xl font-bold  mx-4 "
            style={{ lineHeight: "3rem" }}
          >
            JavaScript Projects
          </p>
     </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.jsProjects.map((proj, i) => (
            <ProjectCard3
              key={i}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${i + 1}`}
            />
          ))}
        </div>
      </div>
      </section>

      <section className='opensource-projects'> 
      <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-4xl md:text-3xl font-bold  mx-4 "
            style={{ lineHeight: "3rem" }}
          >
            Open Source Contributions
          </p>
     </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.openSource.map((proj, i) => (
            <ProjectCard4
              key={i}
              title={proj.title}
              link={proj.link}
              number={`${i + 1}`}
            />
          ))}
        </div>
      </div>
      </section>

      <section className='writing-projects'> 
      <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-4xl md:text-3xl font-bold  mx-4 "
            style={{ lineHeight: "3rem" }}
          >
            Technical Writing Projects
          </p>
     </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">

          {data.user.publication.posts?.map((post, i) => (
            <ProjectCard2
              key={i}
              title={post.title}
              link={`https://captain-eo.hashnode.dev/${post.slug}`}
              imgUrl={`${post.coverImage}`}
              number={`${i + 1 }`}
            />
          ))}

        </div>
      </div>
      </section>
    </section>
  );
}



export default Projects