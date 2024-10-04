import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCountries, fetchCountryList } from './Actions';
import './ComparationForm.css';

const Compare = () => {
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { countryList, error } = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(fetchCountryList());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(fetchCountries(country1, country2));

    if (!error) {
      const formattedCountry1 = country1.replace(/\s+/g, '-');
      const formattedCountry2 = country2.replace(/\s+/g, '-');

      navigate(`/compare/${formattedCountry1}/n/${formattedCountry2}`);
    }
  };

  return (
    <div className="compare-container">
      <h1>Comparation Country</h1>
      <div className="content-wrapper">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={country1}
              onChange={(e) => setCountry1(e.target.value)}
              placeholder="Type country name 1"
              className="input-field"
              list="countryList"
            />
            <input
              type="text"
              value={country2}
              onChange={(e) => setCountry2(e.target.value)}
              placeholder="Type country name 2"
              className="input-field"
              list="countryList"
            />
            <datalist id="countryList">
              {countryList.map((country) => (
                <option key={country.code} value={country.name} />
              ))}
            </datalist>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Compare;