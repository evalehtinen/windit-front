import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native'
import store from './store';
import AppContainer from './navigation/index'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.wrapper}>
        <AppContainer />
      </View>
    </Provider>
  );
}

Expo.registerRootComponent(App);
