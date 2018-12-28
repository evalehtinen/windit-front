import { View, StyleSheet } from 'react-native';
import React from 'react';
import FloatingActionButton from '../navigation/floating_action_button/FloatingActionButton';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const MainLayout = ({ children }) => (
  <View style={styles.wrapper}>
    {children}
    <FloatingActionButton />
  </View>
);

export default MainLayout;
