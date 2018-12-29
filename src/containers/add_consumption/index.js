import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../../components/search_bar'


function AddConsumption() {
  return (
    <View>
      <SearchBar />
    </View>
  )
}

const mapStateToProps = () => ({
});

const mapDispatchProps = {
};

export default connect(mapStateToProps, mapDispatchProps)(AddConsumption)
