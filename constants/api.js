import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';


const endpoint = 'https://api.hashnode.com/';
const ARTICLE_QUERY = `
  {
    user(username: "captain-eo") {
      publication {
        posts(page: 0) {
          title
          brief
          slug
        }
      }
    }
  }
  
`;

export default function getArticles(){
  
    
    const { data, isLoading, error } = useQuery("launches", () => {
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
}

