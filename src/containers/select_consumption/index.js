import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../../components/search_bar'
import colors, { commonStyles } from '../../styles/common';

import { setSelectedConsumption } from '../../reducers/consumption_event';
import { setConsumableListFiltered } from '../../reducers/consumable_list';

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.haastrichtBlue,
    paddingTop: 20,
    paddingBottom: 20,
  },
  textStyle: {
    color: colors.stilDeGrainYellow,
  },
  listItem: {
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    color: colors.haastrichtBlue,
    fontSize: 16,
  },
  separator: {
    ...commonStyles.separator,
    marginLeft: 10,
    marginRight: 10,
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
    <View>
      <TouchableOpacity onPress={() => selectConsumable(props)}>
        <Text style={styles.listItem}>{name}</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  )
}

function SelectConsumption({
  consumableList,
  consumableListFiltered,
  navigation,
  setSelectConsumable,
  callSetConsumableListFiltered,
}) {
  const filterList = (text) => {
    if (text.length === 0) {
      callSetConsumableListFiltered(consumableList);
      return
    }
    let updatedList = consumableList;
    updatedList = updatedList.filter(item => item.name.toLowerCase().search(
      text.toLowerCase(),
    ) !== -1);
    callSetConsumableListFiltered(updatedList)
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <SearchBar
          placeHolderColor={colors.lightSteelBlue}
          onChangeText={text => filterList(text)}
          placeholder="Syötä ruokaa" // todo: translate
          maxLength={30}
        />
      </View>
      {consumableListFiltered.map(item => (
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
  consumableListFiltered: state.consumableList.consumableListFiltered,
});

const mapDispatchToProps = dispatch => ({
  callSetConsumableListFiltered: props => dispatch(setConsumableListFiltered(props)),
  setSelectConsumable: props => dispatch(setSelectedConsumption(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectConsumption)
