import { combineReducers, createStore } from 'redux';
import numbersReducer from './numbers';

const reducers = combineReducers({
  numbers: numbersReducer,
});

export default createStore(reducers);
