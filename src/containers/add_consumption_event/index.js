import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../styles/common'

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.haastrichtBlue,
    paddingTop: 20,
    paddingBottom: 20,
  },
  textStyle: {
    color: colors.haastrichtBlue,
  },
});

function AddConsumptionEvent({ consumable }) {
  return (
    <View>
      <Text>{consumable.name}</Text>
    </View>
  )
}


const mapStateToProps = state => ({
  consumable: state.consumptionEvent.selectedConsumption,
});

const mapDispatchProps = {
};

export default connect(mapStateToProps, mapDispatchProps)(AddConsumptionEvent)
