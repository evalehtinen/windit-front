import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
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

export class MainComponent extends Component {
  componentDidMount() {
    const { teksti } = this.props;
    teksti()
  }

  render() {
    const { response } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{response}</Text>
      </View>
    )
  }
}

MainComponent.propTypes = {
  response: PropTypes.string,
  teksti: PropTypes.func,
};

MainComponent.defaultProps = {
  response: '',
  teksti: getTeksti(),
};

const mapStateToProps = (state) => {
  return {
    testiTeksti: state.testiString,
  }
};

const mapDispatchProps = {
  teksti: getTeksti,
};

export default connect(mapStateToProps, mapDispatchProps)(MainComponent)
