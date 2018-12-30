import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../styles/common'

const styles = StyleSheet.create({
  searchInput: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 45,
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 13,
    top: 12,
  },
  inputText: {
    marginLeft: 43,
    fontSize: 15,
    color: colors.primaryText,
  },
});

const SearchBar = (props) => {
  const { placeHolderColor } = props;
  return (
    <View style={styles.searchInput}>
      <MaterialIcons
        name="search"
        size={22}
        style={styles.searchIcon}
        color={placeHolderColor}
      />
      <TextInput
        {...props}
        style={styles.inputText}
        placeholderTextColor={placeHolderColor}
      />
    </View>
  )
};

export default SearchBar
