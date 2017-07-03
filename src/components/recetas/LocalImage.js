import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native'
import { LazyloadImage } from 'react-native-lazyload'
import LinearGradient from 'react-native-linear-gradient'

const LocalImage = ({ source, originalWidth, originalHeight, nombre }) => {
  let windowWidth = Dimensions.get('window').width / 2;
  let widthChange = (windowWidth -8)/originalWidth;
  let newWidth = originalWidth * widthChange;
  let newHeight = originalHeight * widthChange;

  return (
    <View style={[ styles.imagenContenedor, { width: newWidth, height: newHeight }]}>
      <LazyloadImage
        host="imagen-load"
        style={[ styles.imagen, { width: newWidth, height: newHeight }]}
        source={source}
      />
      <LinearGradient colors={['rgba(50,50,50,0)', 'rgba(50,50,50,0.8)']} style={styles.nombreContenedor}>
        <Text style={styles.nombre}>{nombre}</Text>
      </LinearGradient>
    </View>
  );
}

let ancho = (Dimensions.get('window').width / 2) - 8;

const styles = StyleSheet.create({
  imagenContenedor: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#e72c4b',
  },
  imagen: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nombreContenedor: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 7,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  nombre: {
    fontFamily: 'Anton-Regular',
    color: '#fff',
    fontSize: 20,
    paddingBottom: 5,
  }
});

export default LocalImage;
