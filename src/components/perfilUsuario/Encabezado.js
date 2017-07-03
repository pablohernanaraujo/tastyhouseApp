import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Encabezado extends Component {
  render() {

    let Avatar = <Image
      source={ require('../../images/avatar.jpg') }
      style={styles.avatar}
    />

    if(this.props.usuario.avatar){
      Avatar = <Image
        source={{ uri: this.props.usuario.avatar.url }}
        style={styles.avatar}
      />;
    }

    return (
      <LinearGradient
        colors={['rgba(231,44,75,1)', 'rgba(231,44,75,0.6)']} style={styles.encabezado}
      >
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            style={styles.boton}
          >
            <Text style={styles.textoBoton}>MENSAJEAR</Text>
          </TouchableHighlight>
          {Avatar}
          <TouchableHighlight
            style={styles.boton}
          >
            <Text style={styles.textoBoton}>SEGUIR</Text>
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={styles.datosContenedor}>
            <Text style={styles.textoDatos}>{this.props.cantidadRecetas}</Text>
            <Text style={styles.textoSubitutlos}>Recetas</Text>
          </View>
          <View style={styles.datosContenedor}>
            <Text style={styles.textoDatos}>154</Text>
            <Text style={styles.textoSubitutlos}>Seguidores</Text>
          </View>
          <View style={styles.datosContenedor}>
            <Text style={styles.textoDatos}>24</Text>
            <Text style={styles.textoSubitutlos}>Siguiendo</Text>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  encabezado: {
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 25,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 15,
    marginRight: 15,
  },
  boton: {
    width: 95,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBoton: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 10,
  },
  datosContenedor: {
    width: 70,
  },
  textoDatos: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  textoSubitutlos: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
    fontFamily: 'sans-serif-light',
    textAlign: 'center',
  }
});
