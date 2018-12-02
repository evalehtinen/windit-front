import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTeksti } from './reducers/testi'

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

export class HomeScreen extends Component {
  componentDidMount() {
    // const { teksti } = this.props;
    // teksti()
  }

  render() {
    const { response, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{response}</Text>
        <Text style={styles.textStyle}>Maincomponent</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    )
  }
}

HomeScreen.propTypes = {
  response: PropTypes.string,
  // teksti: PropTypes.func,
};

HomeScreen.defaultProps = {
  response: '',
  // teksti: getTeksti(),
};

const mapStateToProps = state => ({
  testiTeksti: state.testiString,
});

const mapDispatchProps = {
  teksti: getTeksti,
};

export default connect(mapStateToProps, mapDispatchProps)(HomeScreen)
