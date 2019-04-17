import { createStore, applyMiddleware, combineReducers } from 'redux';
import hackerNewsReducer from './ducks/hackerNewsReducer';
import promiseMiddleware from 'redux-promise-middleware';
import mediumReducer from './ducks/mediumReducer';

const rootReducer = combineReducers({
  hackerNews: hackerNewsReducer,
  medium: mediumReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
