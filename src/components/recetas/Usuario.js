import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import TimeAgo from 'react-native-timeago'

export default class Usuario extends Component {
  render() {
    const { usuario, fecha } = this.props;
    return (
      <View style={styles.usuario}>
        <View style={styles.datosContendor}>
          <Text style={styles.nombre}>{usuario.nombre} {usuario.apellido}</Text>
          <TimeAgo
            time={fecha}
            style={styles.tiempo}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  usuario: {
    backgroundColor: 'rgba(230,230,230,0.3)',
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  datosContendor: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
  },
  nombre: {
    fontFamily: 'sans-serif-light',
    color: 'rgba(0,0,0,0.8)',
    fontSize: 11,
  },
  tiempo: {
    fontFamily: 'sans-serif-light',
    color: 'rgba(100,100,100,0.6)',
    fontSize: 9,
  },
});
