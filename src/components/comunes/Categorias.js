import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class Categorias extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{this.props.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 11,
    backgroundColor: 'rgba(200,200,200,0.5)',
    marginRight: 5,
    marginTop: 5,
  },
  texto: {
    fontSize: 9,
    fontFamily: 'sans-serif-light',
    color: 'rgba(0,0,0,0.7)',
  },
});
