import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountries } from './Actions';
import './ComparisonResults.css';

const ComparisonResults = () => {
  const { code1, code2 } = useParams();
  const dispatch = useDispatch();
  const { country1, country2, error } = useSelector((state) => state.country);

  useEffect(() => {
    const formattedCode1 = code1.replace(/-/g, ' ');
    const formattedCode2 = code2.replace(/-/g, ' ');

    dispatch(fetchCountries(formattedCode1, formattedCode2));
  }, [dispatch, code1, code2]);

  const HEADER_TEXT = "Comparison Country";
  const QUOTE_TEXT = " ";

  if (error) {
    return (
      <div className="error-message">
        Error: {error}
      </div>
    );
  }

  if (!country1 || !country2) {
    return (
      <div className="no-data-message">
        Empty Data. Fill in the Form First.
      </div>
    );
  }

  const renderCountryInfo = (country) => (
    <div className="country-info">
      <img src={country.flags.svg} alt={`Flag ${country.name.common}`} className="flag" />
      <h2>{country.name.common}</h2>
      <ul>
        <li><strong>Width:</strong> {country.area.toLocaleString()} km²</li>
        <li><strong>Region:</strong> {country.capital}</li>
        <li><strong>Subregion:</strong> {country.subregion}</li>
        <li><strong>Language:</strong> {Object.values(country.languages).join(', ')}</li>
        <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
      </ul>
    </div>
  );

  return (
    <div className="comparison-results">
      <h1>{HEADER_TEXT}</h1>
      <p>{QUOTE_TEXT}</p>
      <div className="comparison-content">
        <div className="results-content">
          <div className="countries-container">
            {renderCountryInfo(country1)}
            {renderCountryInfo(country2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonResults;