import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const sortedCountries = response.data
          .map(country => ({
            name: country.name.common,
            code: country.cca2,
            population: country.population
          }))
          .sort((a, b) => b.population - a.population);
        setCountries(sortedCountries);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setError('Failed to fetch country data');
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const formatPopulation = (population) => {
    if (population >= 1_000_000_000) return (population / 1_000_000_000).toFixed(1) + 'B';
    if (population >= 1_000_000) return (population / 1_000_000).toFixed(1) + 'M';
    if (population >= 1_000) return (population / 1_000).toFixed(1) + 'K';
    return population;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-container">
      <h1 className="population-text">Data Rating Countries</h1>
        <table className="population-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Code</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {countries.slice(0, 50).map((country, index) => (
              <tr key={country.code}>
                <td>{index + 1}</td>
                <td>{country.name}</td>
                <td>{country.code}</td>
                <td>{formatPopulation(country.population)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default Home;