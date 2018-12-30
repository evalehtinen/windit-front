import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../../components/search_bar'
import colors from '../../styles/common'
import { setSelectedConsumption } from '../../reducers/consumption_event';

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

function selectConsumable(props) {
  const { navigation, setSelectConsumable, item } = props;
  setSelectConsumable(item);
  navigation.navigate('add_consumption_event')
}

function ConsumableItem(props) {
  const { name } = props;
  return (
    <TouchableOpacity onPress={() => selectConsumable(props)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}

function SelectConsumption({ consumableList, navigation, setSelectConsumable }) {
  return (
    <View>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      {consumableList.map(item => (
        <ConsumableItem
          key={item.id}
          name={item.name}
          navigation={navigation}
          setSelectConsumable={setSelectConsumable}
          item={item}
        />
      ))}
    </View>
  )
}


const mapStateToProps = state => ({
  consumableList: state.consumableList.consumableList,
});

const mapDispatchToProps = dispatch => ({
  setSelectConsumable: props => dispatch(setSelectedConsumption(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectConsumption)
