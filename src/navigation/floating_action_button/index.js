import { FloatingAction } from 'react-native-floating-action';
import React from 'react'
import { connect } from 'react-redux';

const actions = [{
  text: 'Lisää oire',
  icon: require('../../../assets/baseline_airline_seat_legroom_normal_black_18dp.png'),
  name: 'add_symptom',
  position: 1,
}, {
  text: 'Lisää ruoka-aines',
  icon: require('../../../assets/baseline_cake_black_18dp.png'),
  name: 'select_consumption',
  position: 2,
}];


const FloatingActionButton = ({ navigation }) => (
  <FloatingAction
    actions={actions}
    onPressItem={(name) => {
      navigation.navigate(name)
    }}
  />
);

const mapStateToProps = state => ({});

const mapDispatchProps = {};

export default connect(mapStateToProps, mapDispatchProps)(FloatingActionButton)
