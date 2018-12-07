import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducers/index';
import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';

const client = axios.create({
  baseURL: 'http://192.168.1.114:3000',
  responseType: 'json',
});

const logger = createLogger({
  timestamps: true,
  duration: true,
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client), logger));
export default store
