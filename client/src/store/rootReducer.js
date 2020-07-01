import { combineReducers } from 'redux';
import numbersReducer from './numbers';

export default combineReducers({
  numbers: numbersReducer,
});
