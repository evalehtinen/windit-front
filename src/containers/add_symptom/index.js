import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

function AddSymptom() {
  return (
    <View />
  )
}

const mapStateToProps = () => ({
});

const mapDispatchProps = {
};

export default connect(mapStateToProps, mapDispatchProps)(AddSymptom)
