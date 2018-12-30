import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../styles/common'
import { postConsumableEvent } from '../../reducers/consumption_event'

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

function AddConsumptionEvent({ consumable, user, callPostConsumableEvent }) {
  return (
    <View>
      <Text>{consumable.name}</Text>
      <TouchableOpacity onPress={() => callPostConsumableEvent(consumable, user, 0)}>
        <Text>Lähetä pyyntö</Text>
      </TouchableOpacity>
    </View>
  )
}


const mapStateToProps = state => ({
  consumable: state.consumptionEvent.selectedConsumption,
  user: state.user.user,
});

const mapDispatchProps = dispatch => ({
  callPostConsumableEvent: (consumable, user, amount) => dispatch(
    postConsumableEvent(consumable, user, amount),
  ),
});

export default connect(mapStateToProps, mapDispatchProps)(AddConsumptionEvent)
