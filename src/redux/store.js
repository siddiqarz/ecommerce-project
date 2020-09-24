import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

/*whenever actions get fired or dispatched, they are 
caught by middlware and then something is done like logging, and passed to root reducer. Store expects an array */

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
