import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCountries, fetchCountryList } from './Actions';
import './ComparisonForm.css';

const ComparisonForm = () => {
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

      navigate(`/comparisonForm/${formattedCountry1}/n/${formattedCountry2}`);
    }
  };

  const filteredCountryList = countryList.filter(
    (country) => country.name !== country1
  );

  return (
    <div className="comparison-container">
      <h1>Comparison Country</h1>
      <div className="content-wrapper">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={country1}
              onChange={(e) => setCountry1(e.target.value)}
              placeholder="Type country name 1"
              className="input-field"
              list="countryList1"
            />
            <datalist id="countryList1">
              {countryList.map((country) => (
                <option key={country.code} value={country.name} />
              ))}
            </datalist>

            <input
              type="text"
              value={country2}
              onChange={(e) => setCountry2(e.target.value)}
              placeholder="Type country name 2"
              className="input-field"
              list="countryList2"
            />
            <datalist id="countryList2">
              {filteredCountryList.map((country) => (
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

export default ComparisonForm;
