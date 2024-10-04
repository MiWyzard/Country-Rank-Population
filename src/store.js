import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from './features/Reducer'

const rootReducer = combineReducers({
  country: countryReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
