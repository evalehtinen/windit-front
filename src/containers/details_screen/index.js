import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import FloatingActionButton from '../../navigation/floating_action_button'

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
})

class DetailsScreen extends Component {
  componentDidMount() {

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Details</Text>
        <FloatingActionButton navigation={navigation} />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchProps = {}

export default connect(mapStateToProps, mapDispatchProps)(DetailsScreen)
