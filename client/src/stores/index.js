import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

import Reducer from './reducers/Reducer';

const reducer = combineReducers({ Reducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
