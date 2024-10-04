import axios from 'axios';

export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';
export const FETCH_COUNTRY_LIST_SUCCESS = 'FETCH_COUNTRY_LIST_SUCCESS';
export const FETCH_COUNTRY_LIST_FAILURE = 'FETCH_COUNTRY_LIST_FAILURE';

export const fetchCountries = (country1, country2) => async (dispatch) => {
  try {
    const [response1, response2] = await Promise.all([
      axios.get(`https://restcountries.com/v3.1/name/${country1}`),
      axios.get(`https://restcountries.com/v3.1/name/${country2}`)
    ]);

    dispatch({
      type: FETCH_COUNTRIES_SUCCESS,
      payload: { country1: response1.data[0], country2: response2.data[0] }
    });
  } catch (error) {
    dispatch({
      type: FETCH_COUNTRIES_FAILURE,
      error: error.message
    });
  }
};

export const fetchCountryList = () => async (dispatch) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    
    dispatch({
      type: FETCH_COUNTRY_LIST_SUCCESS,
      payload: response.data.map(country => ({
        name: country.name.common,
        code: country.cca2,
      })),
    });
  } catch (error) {
    dispatch({
      type: FETCH_COUNTRY_LIST_FAILURE,
      error: error.message
    });
  }
};