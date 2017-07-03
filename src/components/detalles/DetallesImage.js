import React, { Component } from 'react'
import {
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

const DetallesImage = ({ source, originalWidth, originalHeight }) => {
  let windowWidth = Dimensions.get('window').width;
  let widthChange = (windowWidth -40)/originalWidth;
  let newWidth = originalWidth * widthChange;
  let newHeight = originalHeight * widthChange;

  return (
    <Image
      source={source}
      style={[ styles.imagen, { width: newWidth, height: newHeight }]}
    />
  );
}

const styles = StyleSheet.create({
  imagen: {
    flex: 1,
  },
});

export default DetallesImage;
