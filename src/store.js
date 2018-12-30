import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import reducer from './reducers/index';

const client = axios.create({
  baseURL: 'http://192.168.1.62:3000/api',
  responseType: 'json',
});

// const logger = createLogger({
//   timestamps: true,
//   duration: true,
// });

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
export default store
