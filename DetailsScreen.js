import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

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

export class DetailsScreen extends Component {
  componentDidMount() {

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Details</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchProps = {
};

export default connect(mapStateToProps, mapDispatchProps)(DetailsScreen)
