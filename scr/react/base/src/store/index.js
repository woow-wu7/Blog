import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import HomeReducer from '../page/home/reducer';

const totalReducers = {
  home: HomeReducer
};

const store = createStore(
  combineReducers({ ...totalReducers }),
  composeWithDevTools(
    applyMiddleware(),
  )
);

export default store;