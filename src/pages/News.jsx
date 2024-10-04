import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
          params: {
            'api-key': import.meta.env.VITE_NYT_API_KEY,
            'q': 'peace',
            'sort': 'newest'
          }
        });
        setArticles(response.data.response.docs.slice(0, 9));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <a 
          key={index} 
          href={article.web_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="news-item"
        >
          {article.multimedia && article.multimedia.length > 0 && (
            <img 
              src={`https://www.nytimes.com/${article.multimedia[0].url}`} 
              alt={article.headline.main} 
              className="news-image"
            />
          )}
          <div className="news-content">
            <h2>{article.headline.main}</h2>
            <p>{article.abstract}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default News;