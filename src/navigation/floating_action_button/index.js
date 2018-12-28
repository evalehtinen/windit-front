import { FloatingAction } from 'react-native-floating-action';
import React from 'react'
import * as navigationActions from '../actions'

const actions = [{
  text: 'Lisää oire',
  icon: require('../../../assets/baseline_airline_seat_legroom_normal_black_18dp.png'),
  name: 'bt_symptom',
  position: 1,
}, {
  text: 'Lisää ruoka-ainsse',
  icon: require('../../../assets/baseline_cake_black_18dp.png'),
  name: 'bt_food',
  position: 2,
}];


const FloatingActionButton = ({ props }) => (
  <FloatingAction
    actions={actions}
    onPressItem={(name) => {
      props.navigation.dispatch(navigationActions.navigateToDetails());
      console.log(`selected button: ${name}`);
    }}
  />
);

export default FloatingActionButton;
