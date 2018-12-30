import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FloatingActionButton from '../../navigation/floating_action_button';
import { getConsumables } from '../../reducers/consumable_list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
  },
});

class HomeScreen extends Component {
  componentDidMount() {
    const { callGetConsumables } = this.props;
    callGetConsumables()
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Main</Text>
        <FloatingActionButton navigation={navigation} />
      </View>
    )
  }
}

HomeScreen.propTypes = {
  callGetConsumables: PropTypes.func.isRequired,
};

HomeScreen.defaultProps = {
};

const mapStateToProps = state => ({
});

const mapDispatchProps = {
  callGetConsumables: getConsumables,
};

export default connect(mapStateToProps, mapDispatchProps)(HomeScreen)
