import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducers/testi';
import { MainComponent } from './Main';

const client = axios.create({
  baseURL: 'http://192.168.1.114:3000',
  responseType: 'json',
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <MainComponent />
      </View>
    </Provider>
  );
}
