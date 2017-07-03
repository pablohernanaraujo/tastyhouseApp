import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Tiempo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="clock-o" size={16} color="#e72c4b" style={styles.icono}/>
        <Text style={styles.texto}>{this.props.hora} hs {this.props.minuto} min</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 11,
    backgroundColor: 'rgba(200,200,200,0.5)',
    marginRight: 5,
    marginTop: 5,
    flexDirection: 'row',
  },
  icono: {
    backgroundColor: '#ccc',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 11,
  },
  texto: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 9,
    fontFamily: 'sans-serif-light',
    color: 'rgba(0,0,0,0.7)',
  },
});
