import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import TimeAgo from 'react-native-timeago'
import { Card } from 'react-native-material-design'

export default class Usuario extends Component {
  render() {
    const { usuario, fecha } = this.props;

    let avatar = <Image
      source={ require('../../images/avatar.jpg') }
      style={styles.avatar}
    />

    if(usuario.avatar){
      avatar = <Image
        source={{ uri:  usuario.avatar.url }}
        style={styles.avatar}
      />
    }

    return (
      <Card style={{paddingLeft: 0, paddingRight: 0, marginTop: 0, marginLeft: 0, marginRight: 0, borderRadius: 10}}>
        <View style={styles.usuario}>
          <View style={styles.avatarContenedor}>
            {avatar}
          </View>
          <View style={styles.datosContendor}>
            <Text style={styles.nombre}>{usuario.nombre} {usuario.apellido}</Text>
            <TimeAgo
              time={fecha}
              style={styles.tiempo}
            />
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  usuario: {
    backgroundColor: '#fff',
    height: 80,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  avatarContenedor: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  datosContendor: {
    padding: 10,
  },
  nombre: {
    fontFamily: 'sans-serif-light',
    color: 'rgba(0,0,0,0.8)'
  },
  tiempo: {
    fontFamily: 'sans-serif-light',
    color: 'rgba(100,100,100,0.6)',
    fontSize: 12,
  },
});
