import { createStore, applyMiddleware } from 'redux';
import reducers from './rootReducer';
import thunk from 'redux-thunk';

export default createStore(reducers, applyMiddleware(thunk));
