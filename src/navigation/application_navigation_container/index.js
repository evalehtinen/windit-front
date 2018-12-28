import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { BackHandler } from 'react-native';
import StackNavigator from '../navigators/stack_navigator'
import { navigateBack } from '../actions';


const ApplicationNavigationContainer = createAppContainer(StackNavigator);

const mapStateToProps = state => ({
  // navigation: state.navigationData
});

const mapDispatchToProps = dispatch => ({ dispatch });

class AppNav extends Component {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    this.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    const { navigation, dispatch } = this.props;
    // if its at the most backwards state
    if (navigation.index === 0) return false;
    dispatch(navigateBack());
    return true;
  };


  render() {
    return (
      <ApplicationNavigationContainer />
    );
  }
}

const connectedApplicationContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(AppNav);

export default connectedApplicationContainer;
