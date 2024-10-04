import { 
  FETCH_COUNTRIES_SUCCESS, 
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRY_LIST_SUCCESS,
  FETCH_COUNTRY_LIST_FAILURE
} from './Actions';

const initialState = {
  country1: null,
  country2: null,
  countryList: [],
  error: null
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        country1: action.payload.country1,
        country2: action.payload.country2,
        error: null
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case FETCH_COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        countryList: action.payload,
        error: null
      };
    case FETCH_COUNTRY_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default countryReducer;