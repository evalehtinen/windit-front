import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FloatingActionButton from '../../navigation/floating_action_button';
import { getConsumables } from '../../reducers/consumable_list';
import { setUser } from '../../reducers/user';

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
    const { callGetConsumables, callSetUser } = this.props;
    callGetConsumables();
    callSetUser({ id: 2, name: 'Benis User' })
  }

  render() {
    const { navigation, user } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          Hello
          {' '}
          {user.name}
        </Text>
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
  user: state.user.user,
});

const mapDispatchProps = dispatch => ({
  callGetConsumables: () => dispatch(getConsumables()),
  callSetUser: props => dispatch(setUser(props)),
});

export default connect(mapStateToProps, mapDispatchProps)(HomeScreen)
