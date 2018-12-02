import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import reducer from './reducers/testi';
import HomeScreenC from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';

const client = axios.create({
  baseURL: 'http://192.168.1.114:3000',
  responseType: 'json',
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
const AppNavigator = createStackNavigator({
  Home: HomeScreenC,
  Details: DetailsScreen,
});
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}