import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigationContainer from './navigation/application_navigation_container'
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationNavigationContainer />
    </Provider>
  );
}

Expo.registerRootComponent(App);
