import { combineReducers } from 'redux';
import numbersReducer from './numbers';
import userInterface from './user-interface';

export default combineReducers({
  numbers: numbersReducer,
  ui: userInterface,
});
