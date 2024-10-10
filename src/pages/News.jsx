import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('peace');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
          params: {
            'api-key': import.meta.env.VITE_NYT_API_KEY,
            'q': category,
            'sort': 'newest'
          }
        });
        setArticles(response.data.response.docs.slice(0, 9));
        setSearchTerm('');
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  const filteredArticles = articles.filter(article => 
    article.headline.main.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>News Update</h1>
      <div className='search'>
        <input 
          type="text" 
          placeholder="Search articles..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="peace">Peace</option>
          <option value="politics">Politics</option>
          <option value="technology">Technology</option>
          <option value="health">Health</option>
        </select>
      </div>
      <div className="news-container">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <a 
              key={index} 
              href={article.web_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="news-item"
            >
              {article.multimedia && article.multimedia.length > 0 ? (
                <img 
                  loading="lazy"
                  src={`https://www.nytimes.com/${article.multimedia[0].url}`} 
                  alt={article.headline.main}
                  className="news-image"
                />
              ) : (
                <img 
                  src="fallback-image-url.jpg"
                  alt="No multimedia available" 
                  className="news-image" 
                />
              )}
              <div className="news-content">
                <h2>{article.headline.main.length > 60 ? article.headline.main.slice(0, 60) + '...' : article.headline.main}</h2>
                <p>{article.abstract.length > 120 ? article.abstract.slice(0, 120) + '...' : article.abstract}</p>
              </div>
            </a>
          ))
        ) : (
          <div>No articles found matching "{searchTerm}"</div>
        )}
      </div>
    </div>
  );
};

export default News;